import { useEffect, useState } from 'react';

import { auth, db } from '../../../services/firebase/firebase';
import MyEventContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import { onValue, query, ref } from 'firebase/database';
import UserContext from '../../context/UserContext';
import AllUsersContext from '../../context/AllUsersContext';
import { defaultMyUser } from '../../utilities/defaultUser';
import { defaultEvent } from '../../utilities/defaultEvent';

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export default function DBProvider({ children }: Props) {
	const [myEvents, setMyEvents] = useState<SettlementEvent[]>([defaultEvent]);
	const [participateEvents, setParticipateEvents] = useState<SettlementEvent[]>([defaultEvent]);
	const [myUser, setMyUser] = useState<MyUser>(defaultMyUser);
	const [allUsers, setAllUsers] = useState<MyUser[]>([defaultMyUser]);

	const url = window.location.href;

	async function getUser(uid: string) {
		await onValue(ref(db, `/users/${uid}`), (snapshot) => {
			if (snapshot.exists()) {
				const user = {
					...snapshot.val(),
					uid: uid,
				};
				setMyUser(user);
			}
		});
	}

	async function getAllUsers() {
		const userQuery = query(ref(db, 'users/'));
		await onValue(userQuery, (snapshot) => {
			if (snapshot.exists()) {
				let test: [string, MyUser][] = Object.entries(snapshot.val());
				const userData = test.map((user) => {
					return {
						...user[1],
						uid: user[0],
					};
				});
				setAllUsers(userData);
			} else {
				setAllUsers([defaultMyUser]);
			}
		});
	}

	async function getEvent(id: string, type: string): Promise<void> {
		await onValue(ref(db, `/events/${id}`), (snapshot): void => {
			if (snapshot.exists()) {
				const eventObject: SettlementEvent = snapshot.val();
				eventObject.id = id;
				if (eventObject.users !== undefined) {
					eventObject.users = Object.keys(eventObject.users);
				} else {
					eventObject.users = [];
				}
				// Modify payments in event object
				if(eventObject.payments !== undefined) {
					eventObject.payments = Object.values(eventObject.payments)
				} else {
					eventObject.payments = [];
				}
			

				if (type === 'participateEvent') {
					setParticipateEvents((prevValue: SettlementEvent[]) => {
						return modifyEvent(prevValue, eventObject);
					});
				}

				if (type === 'ownerEvent') {
					setMyEvents((prevValue: SettlementEvent[]) => {
						return modifyEvent(prevValue, eventObject);
					});
				}

				function modifyEvent(prevValue: SettlementEvent[], eventObject: SettlementEvent): SettlementEvent[] {
					console.log(eventObject);
					if (prevValue[0] === defaultEvent) {
						return [eventObject];
					}

					if (prevValue[0] !== defaultEvent) {
						const updatedObject = prevValue.filter((ev) => {
							if (ev.id === id) {
								return null;
							} else {
								return ev;
							}
						});
						console.log(updatedObject);

						return [...updatedObject, eventObject];
					}

					return [defaultEvent];
				}
			}
		});
	}

	async function handleEvents(myUser: MyUser) {
		myUser.participateOfEvents.forEach(async (id: string): Promise<void> => {
			getEvent(id, 'participateEvent');
		});

		// Map my Events
		myUser.ownerOfEvents.forEach(async (id: string): Promise<void> => {
			console.log(id);
			getEvent(id, 'ownerEvent');
		});
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			setMyEvents([defaultEvent]);
			setParticipateEvents([defaultEvent]);
			if (myUser.uid === 'defaultUID') getUser(auth.currentUser.uid);
			if (myUser.uid !== 'defaultUID') handleEvents(myUser);
			getAllUsers();
		}
	}, [myUser]);
	return (
		<MyEventContext.Provider value={myEvents}>
			<ParticipateEventsContext.Provider value={participateEvents}>
				<UserContext.Provider value={myUser}>
					<AllUsersContext.Provider value={allUsers}>
						<>{children}</>
					</AllUsersContext.Provider>
				</UserContext.Provider>
			</ParticipateEventsContext.Provider>
		</MyEventContext.Provider>
	);
}
