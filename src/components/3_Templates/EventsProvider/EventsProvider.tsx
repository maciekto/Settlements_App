import React, { Children, useEffect, useState } from 'react';

import { auth, db } from '../../../services/firebase/firebase';
import MyEventContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import { Query, equalTo, get, onValue, orderByChild, query, ref } from 'firebase/database';
import { getUser } from '../../../services/firebase/users/users';

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export default function EventsProvider({ children }: Props) {
	const [myEvents, setMyEvents] = useState<SettlementEvent[] | undefined>();
	const [participateEvents, setParticipateEvents] = useState<SettlementEvent[] | undefined>();
	const [myUser, setMyUser] = useState<MyUser | undefined>(undefined);

	async function getEvents(query: Query, type: string) {
		await onValue(query, (snapshot) => {
			if (snapshot.exists()) {
				console.log('FIREBASE - Events exists');
				const dbData: SettlementEvent[] = snapshot.val();

				// restucture object to: Array[Array[key], Array[values]]
				const formatedData: [string, SettlementEvent][] = Object.values(Object.entries(dbData));

				// restructure formatedData to Array of SettledEvents
				const finalData: SettlementEvent[] = formatedData.map((el: [string, SettlementEvent]): SettlementEvent => {
					const bang = {
						...el[1],
						id: el[0],
						users: Object.values(el[1].users),
					};
					return bang;
				});

				if (type === 'myEvents') {
					setMyEvents(finalData);
				}

				if (type === 'participateEvents') {
					setParticipateEvents(finalData);
				}
			}
		});
	}

	function handleEvents(uid: string) {
		const myEventsQuery = query(ref(db, 'events'), orderByChild('/owner'), equalTo(uid));
		const participateEventsQuery = query(ref(db, 'events'), orderByChild(`users/${uid}`), equalTo(uid));

		// getEvents(myEventsQuery, 'myEvents');
		// getEvents(participateEventsQuery, 'participateEvents');
	}

	async function getUser(uid: string) {
		await onValue(ref(db, `/users/${uid}`), (snapshot) => {
			if (snapshot.exists()) {
				setMyUser(snapshot.val());
			}
		});
	}

	async function getEvent(id: string): Promise<SettlementEvent | undefined> {
		return await get(ref(db, `/events/${id}`)).then((snapshot): SettlementEvent | undefined => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
				return snapshot.val();
			}
			return undefined;
		});
	}

	async function handleEvents2(myUser: MyUser) {
		// Map participate events
		console.log(myUser);
		myUser.participateOfEvents.forEach(async (id: string): Promise<void> => {
			const participateEvent: SettlementEvent | undefined = await getEvent(id);

			if (participateEvent !== undefined) {
				participateEvent.id = id;

				setParticipateEvents((prevValue: SettlementEvent[] | undefined) => {
					if (prevValue === undefined) {
						return [participateEvent];
					}

					if (prevValue !== undefined) {
						return [...prevValue, participateEvent];
					}
				});
			}
		});

		// Map my Events
		myUser.ownerOfEvents.forEach(async (id: string): Promise<void> => {
			const ownerEvent: SettlementEvent | undefined = await getEvent(id);

			if (ownerEvent !== undefined) {
				ownerEvent.id = id;
				setMyEvents((prevValue: SettlementEvent[] | undefined) => {
					if (prevValue === undefined) {
						return [ownerEvent];
					}

					if (prevValue !== undefined) {
						return [...prevValue, ownerEvent];
					}
				});
			}
		});
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			handleEvents(auth.currentUser.uid);
			if (myUser === undefined) getUser(auth.currentUser.uid);
			if (myUser !== undefined) {
				handleEvents2(myUser);
			}
			console.log(myUser);
		}
	}, [myUser]);
	return (
		<MyEventContext.Provider value={myEvents}>
			<ParticipateEventsContext.Provider value={participateEvents}>{children}</ParticipateEventsContext.Provider>
		</MyEventContext.Provider>
	);
}
