// TODO: Make logic for authentication (do not show event to user if he is not a member or the owner)
// ^ Need to get events from database only for the owner or the member (not downloading all the events and then filter)

import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { auth, db } from '../../../../services/firebase/firebase';
import Loader from '../../../0_Atoms/Loader/Loader';
import MyEventsContext from '../../../context/MyEventsContext';
import ParticipateEventsContext from '../../../context/ParticipateEventsContext';
import { onValue, query, ref } from 'firebase/database';
import UserContext from '../../../context/UserContext';
import UserAvatar from '../../../0_Atoms/UserAvatar/UserAvatar';
import PillsSection from '../../../1_Molecues/PillsSection/PillsSection';
import Pill from '../../../0_Atoms/Pill/Pill';

export const selectedEventContext = createContext<SettlementEvent | undefined>(undefined);

export default function EventDashboard() {
	const params = useParams();
	const navigate = useNavigate();

	const myEvents = useContext(MyEventsContext);
	const participateEvents = useContext(ParticipateEventsContext);
	const myUser = useContext(UserContext);



	const [selectedEvent, setSelectedEvent] = useState<undefined | SettlementEvent>(undefined);
	const [errorMessage, setErrorMessage] = useState<string | false>(false);

	const [usersInEvent, setUsersInEvent] = useState<MyUser[]>([]);
	const [eventOwner, setEventOwner] = useState<MyUser | undefined>(undefined);

	// const myEvents: false | SettlementEvent[] = useContext(MyEventContext);

	// ^ LOAD EVENT FUNCTIONALITY
	function handleEvents(): void {
		if (myUser === undefined) {
			return;
		}
		if (params.id === undefined) {
			setErrorMessage('Event not Found');
			return;
		}

		if (myEvents) {
			const myEvent: false | SettlementEvent = findEventWithId(myEvents, params.id);
			if (myEvent) {
				setSelectedEvent(myEvent);
				setEventOwner(myUser);
			}
		}

		if (participateEvents) {
			const participateEvent: false | SettlementEvent = findEventWithId(participateEvents, params.id);
			if (participateEvent) {
				setSelectedEvent(participateEvent);
				getUser(participateEvent.owner);
			}
		}
	}
	function findEventWithId(events: SettlementEvent[], id: string): false | SettlementEvent {
		if (id === undefined) return false;

		const event: SettlementEvent = events.filter((el: SettlementEvent) => (el.id === id ? el : null))[0];
		if (event === undefined) return false;

		return event;
	}
	async function getUser(uid: string) {
		await onValue(ref(db, `/users/${uid}`), (snapshot) => {
			if (snapshot.exists()) {
				setEventOwner({... snapshot.val(), uid: uid });
			}
		});
	}
	function getUsers(uid: string) {
		const userQuery = query(ref(db, `users/${uid}`));
		onValue(userQuery, (snapshot) => {
			if (snapshot.exists()) {
				setUsersInEvent((prevValue: MyUser[]) => {
					return [...prevValue, { ...snapshot.val(), uid: uid }];
				});
			}
		});
	}
	function handleUsersInEvent() {
		selectedEvent?.users.map((userUid: string) => {
			getUsers(userUid);
		});
		console.log(usersInEvent);
	}
	// ^ LOAD EVENT FUNCTIONALITY

	function editEvent() {
		navigate(`/event/${params.id}/edit`);
	}

	useEffect(() => {
		if (auth.currentUser !== null) {
			// ^ LOAD EVENT FUNCTIONALITY
			handleEvents();
			if (selectedEvent) {
				if (usersInEvent.length == 0) {
					handleUsersInEvent();
				}
			}
			// ^ LOAD EVENT FUNCTIONALITY
		}
	}, [selectedEvent, myEvents, participateEvents, usersInEvent]);

	if (selectedEvent === undefined && !errorMessage) {
		return <Loader size='big' />;
	}

	if (errorMessage !== false) {
		console.log(errorMessage);
		return <div>{errorMessage}</div>;
	}

	if (selectedEvent) {
		return (
			<div className='h-full'>
				<div className='border-2 border-themePrimary p-2 pt-4 pb-4 rounded-2xl flex flex-col gap-4 mb-4'>
					<div className='flex justify-between items-center pl-2 pr-2'>
						<span className='font-bold text-xl'>{selectedEvent.name}</span>
						<UserAvatar
							myUser={eventOwner}
							size='medium'
						/>
					</div>

					<div className='flex gap-2 pl-2 pr-2'>
						{usersInEvent.map((user, index) => {
							return (
								<UserAvatar
									key={index}
									myUser={user}
									size='medium'
								/>
							);
						})}
					</div>
					<PillsSection>
					<Pill
							onClick={() => {
								navigate(`/event/${params.id}/`);
							}}>
							Summary
						</Pill>
						<Pill
							onClick={() => {
								navigate(`/event/${params.id}/payments`);
							}}>
							Payments
						</Pill>
						

						<Pill onClick={editEvent}>Edit Event</Pill>
						<></>
					</PillsSection>
				</div>
				<selectedEventContext.Provider value={selectedEvent}>
					<Outlet></Outlet>
				</selectedEventContext.Provider>
				
			</div>
		);
	}

	return <div>Error not found</div>;
}
