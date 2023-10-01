import { Query, child, equalTo, get, onValue, orderByChild, orderByValue, query, ref } from 'firebase/database';
import { db, dbRef } from './firebase';

// TODO: Figure out how to set .indexOn in firebase

export async function getData(query: Query) {
	return await get(query).then((snapshot) => {
		if (snapshot.exists()) {
			console.log('FIREBASE - My Events exists');
			const dbData: SettlementEvent[] = snapshot.val();

			// restucture object to: Array[Array[key], Array[values]]
			const formatedData: [string, SettlementEvent][] = Object.values(Object.entries(dbData));

			// restructure formatedData to Array of SettledEvents
			const finalData: SettlementEvent[] = formatedData.map((el: [string, SettlementEvent]): SettlementEvent => {
				const bang = {
					...el[1],
					id: el[0],
				};
				return bang;
			});
			return finalData;
		}
		return false;
	});
}

export async function getEvents(uid: string, type: string): Promise<SettlementEvent[] | false> {
	if (type === 'myEvents') {
		const myEventsQuery = query(ref(db, 'events'), orderByChild('/owner'), equalTo(uid));
		return await getData(myEventsQuery);
	}

	if (type === 'participateEvents') {
		const participateEventsQuery = query(ref(db, 'events'), orderByChild(`/users/${uid}`), equalTo(uid));
		return await getData(participateEventsQuery);
	}

	return false;

	// if (type === 'participateEvents') {
	// 	return returnParticipateEvents(finalData);
	// }

	// return await get(child(dbRef, `events/`))
	// 	.then((snapshot) => {
	// 		if (snapshot.exists()) {
	// 			console.log('FIREBASE - Events exists');
	// 			const dbData: SettlementEvent[] = snapshot.val();

	// 			// restucture object to: Array[Array[key], Array[values]]
	// 			const formatedData: [string, SettlementEvent][] = Object.values(Object.entries(dbData));

	// 			// restructure formatedData to Array of SettledEvents
	// 			const finalData: SettlementEvent[] = formatedData.map((el: [string, SettlementEvent]): SettlementEvent => {
	// 				const bang = {
	// 					...el[1],
	// 					id: el[0],
	// 				};
	// 				return bang;
	// 			});

	// 			if (type === 'myEvents') {
	// 				return returnMyEvents(finalData);
	// 			}

	// 			if (type === 'participateEvents') {
	// 				return returnParticipateEvents(finalData);
	// 			}
	// 		}

	// 		if (!snapshot.exists()) {
	// 			console.log('FIREBASE - Events not found in DB');
	// 			return false;
	// 		}
	// 		return false;
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 		return false;
	// 	});

	function returnMyEvents(dataArray: SettlementEvent[]): SettlementEvent[] {
		// Filter events by uid to get only for the current user
		const events: SettlementEvent[] = dataArray.filter((el): SettlementEvent | false => {
			// If true return event
			if (el.owner == uid) {
				return el;
			}

			// If false return false
			return false;
		});
		// Return user events
		return events;
	}

	function returnParticipateEvents(dataArray: SettlementEvent[]): SettlementEvent[] {
		// Filter events to find only those where user participates
		const events: SettlementEvent[] = dataArray.filter((el: SettlementEvent): SettlementEvent | false => {
			// True if user is participant of the event
			const isIncluded: boolean = el.users.includes(uid);

			// Check if user is participant of the event
			// If true then return event
			if (isIncluded) return el;

			// If no, return false
			return false;
		});
		// Return events where user participates
		return events;
	}
}
