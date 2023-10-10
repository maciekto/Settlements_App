import { useEffect, useState } from 'react';

import { auth, db } from '../../../services/firebase/firebase';
import MyEventContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import { onValue, query, ref } from 'firebase/database';
import UserContext from '../../context/UserContext';
import AllUsersContext from '../../context/AllUsersContext';

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export default function DBProvider({ children }: Props) {
	const [myEvents, setMyEvents] = useState<SettlementEvent[] | undefined>();
	const [participateEvents, setParticipateEvents] = useState<SettlementEvent[] | undefined>();
	const [myUser, setMyUser] = useState<MyUser | undefined>(undefined);
	const [allUsers, setAllUsers] = useState<MyUser[] | undefined>(undefined);

	async function getUser(uid: string) {
		await onValue(ref(db, `/users/${uid}`), (snapshot) => {
			if (snapshot.exists()) {
				setMyUser(snapshot.val());
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
				setAllUsers(undefined);
			}
		});
	}

	async function getEvent(id: string, type: string): Promise<void> {
		await onValue(ref(db, `/events/${id}`), (snapshot): void => {
			if (snapshot.exists()) {
				const eventObject: SettlementEvent = snapshot.val();
				eventObject.id = id;
				eventObject.users = Object.keys(eventObject.users);

				if (type === 'participateEvent') {
					setParticipateEvents((prevValue: SettlementEvent[] | undefined) => {
						return modifyEvent(prevValue, eventObject);
					});
				}

				if (type === 'ownerEvent') {
					setMyEvents((prevValue: SettlementEvent[] | undefined) => {
						return modifyEvent(prevValue, eventObject);
					});
				}

				function modifyEvent(prevValue: SettlementEvent[] | undefined, eventObject: SettlementEvent): SettlementEvent[] | undefined {
					if (prevValue === undefined) {
						return [eventObject];
					}

					if (prevValue !== undefined) {
						const updatedObject = prevValue.map((el) => {
							if (el.id === id) {
								return eventObject;
							} else {
								return el;
							}
						});

						return updatedObject;
					}
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
			getEvent(id, 'ownerEvent');
		});
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			if (myUser === undefined) getUser(auth.currentUser.uid);
			if (myUser !== undefined) handleEvents(myUser);
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
