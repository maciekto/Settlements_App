// TODO: Make logic for authentication (do not show event to user if he is not a member or the owner)
// ^ Need to get events from database only for the owner or the member (not downloading all the events and then filter)

// TODO: Get users information from database: displayName, photoUrl need to write getUser function in users.ts services. Map users and get each user inside loop

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth, db } from '../../../services/firebase/firebase';
import Loader from '../../0_Atoms/Loader/Loader';
import MyEventsContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import { equalTo, onValue, query, ref } from 'firebase/database';

export default function EventDashboard() {
	const params = useParams();

	const myEvents = useContext(MyEventsContext);
	const participateEvents = useContext(ParticipateEventsContext);

	const [selectedEvent, setSelectedEvent] = useState<undefined | SettlementEvent>(undefined);
	const [usersInEvent, setUsersInEvent] = useState<MyUser[]>([]);

	// const myEvents: false | SettlementEvent[] = useContext(MyEventContext);
	function handleEvents(): void {
		if (params.id === undefined) return;

		if (myEvents) {
			const myEvent: false | SettlementEvent = findEventWithId(myEvents, params.id);
			if (myEvent) setSelectedEvent(myEvent);
		}

		if (participateEvents) {
			const participateEvent: false | SettlementEvent = findEventWithId(participateEvents, params.id);
			if (participateEvent) setSelectedEvent(participateEvent);
		}
	}
	function findEventWithId(events: SettlementEvent[], id: string): false | SettlementEvent {
		if (id === undefined) return false;

		const event: SettlementEvent = events.filter((el: SettlementEvent) => (el.id === id ? el : null))[0];
		if (event === undefined) return false;

		return event;
	}

	function getUser(uid: string) {
		const userQuery = query(ref(db, `users/${uid}`));
		onValue(userQuery, (snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
				setUsersInEvent((prevValue: MyUser[]) => {
					return [...prevValue, snapshot.val()];
				});
			}
		});
	}
	// TODO: Make users visible to frontend
	function handleUsersInEvent() {
		console.log('lol');
		selectedEvent?.users.map((userUid: string) => {
			getUser(userUid);
		});
		console.log(usersInEvent);
	}

	useEffect(() => {
		if (auth.currentUser !== null) {
			handleEvents();
			if (usersInEvent.length == 0) {
				handleUsersInEvent();
			}
		}
	}, [myEvents, participateEvents, usersInEvent]);

	if (selectedEvent === undefined) {
		return <Loader size='big' />;
	}

	if (selectedEvent) {
		return (
			<div className='border-2 border-slate-700 p-6 rounded-2xl'>
				<p>Event ID {selectedEvent.id}</p>
				<p>Event Name {selectedEvent.name}</p>
				<p>Owner {selectedEvent.owner}</p>
				<div>
					Users
					<br />
					{usersInEvent.map((user) => {
						return (
							<img
								src={user.photoUrl}
								alt=''
								className='rounded-full'
							/>
						);
					})}
				</div>
			</div>
		);
	}

	return <div>Error occured</div>;
}
