import { child, equalTo, get, limitToLast, onValue, orderByChild, query, ref, set } from 'firebase/database';
import { db, dbRef } from './firebase';

// ! Test proper data queries
function testSet() {
	set(ref(db, `e`), {
		displayName: 'bang test',
		id: 'siemano',
	});
}
function testGet() {
	// TODO: FIRST get to know how to get only needed data from database
	// ^ wiem co to query ale jak zastosować metodę i przefiltrować dane.
	// ^ indexon jak będzie dużo danych
	// ^ https://firebase.google.com/docs/database/web/lists-of-data?hl=pl#web-modular-api_6
	const eventOrdered = query(ref(db, 'e'), equalTo('siemanoid'));

	onValue(eventOrdered, (snapshot) => {
		console.log(snapshot);
		console.log(snapshot.val());
	});
}
testGet();
// ! Test proper data queries

export async function getEvents(uid: string, type: string): Promise<SettlementEvent[] | false> {
	return await get(child(dbRef, `events/`))
		.then((snapshot) => {
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
					};
					return bang;
				});

				if (type === 'myEvents') {
					return returnMyEvents(finalData);
				}

				if (type === 'participateEvents') {
					return returnParticipateEvents(finalData);
				}
			}

			if (!snapshot.exists()) {
				console.log('FIREBASE - Events not found in DB');
				return false;
			}
			return false;
		})
		.catch((error) => {
			console.error(error);
			return false;
		});

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
