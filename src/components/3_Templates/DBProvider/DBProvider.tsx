import { useEffect, useState } from 'react';

import { auth, db } from '../../../services/firebase/firebase';
import MyEventContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import { onValue, ref } from 'firebase/database';
import UserContext from '../../context/UserContext';

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export default function DBProvider({ children }: Props) {
	const [myEvents, setMyEvents] = useState<SettlementEvent[] | undefined>();
	const [participateEvents, setParticipateEvents] = useState<SettlementEvent[] | undefined>();
	const [myUser, setMyUser] = useState<MyUser | undefined>(undefined);

	async function getUser(uid: string) {
		await onValue(ref(db, `/users/${uid}`), (snapshot) => {
			if (snapshot.exists()) {
				setMyUser(snapshot.val());
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
		console.log(myUser);
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
		}
	}, [myUser]);
	return (
		<MyEventContext.Provider value={myEvents}>
			<ParticipateEventsContext.Provider value={participateEvents}>
				<UserContext.Provider value={myUser}>
					<>{children}</>
				</UserContext.Provider>
			</ParticipateEventsContext.Provider>
		</MyEventContext.Provider>
	);
}
