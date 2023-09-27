import { initializeApp } from 'firebase/app'; // no compat for new SDK
import { child, get, getDatabase, ref, set } from 'firebase/database';
import { User, getAuth } from 'firebase/auth';

// Get your config here
const firebaseConfig = {
	apiKey: 'AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE',
	authDomain: 'portfoliosettlements.firebaseapp.com',
	projectId: 'portfoliosettlements',
	storageBucket: 'portfoliosettlements.appspot.com',
	messagingSenderId: '476678319901',
	appId: '1:476678319901:web:6956f285d3fcd21a937bf4',
	measurementId: 'G-5LS5T94WQZ',
	databaseURL: 'https://portfoliosettlements-default-rtdb.firebaseio.com/',
};

const firebaseApp = initializeApp(firebaseConfig);

// For onValue call to database
const database = getDatabase(firebaseApp);
// For one call to db
export const dbRef = ref(getDatabase());

export default firebaseApp;
export const db = database;
export const auth = getAuth(firebaseApp);

// Auth functionality
export async function isUserInDB(user: User): Promise<boolean> {
	return await get(child(dbRef, `users/${user.uid}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				// console.log(snapshot.val());
				console.log('isUserInDB: User exists in DB');
				return true;
			}

			if (!snapshot.exists()) {
				console.error('isUserInDB: User not found in DB');
				return false;
			}

			console.error('isUserInDB: Error with retreiving user from database: snapshot does not exist');
			return false;
		})
		.catch((error) => {
			console.error('isUserInDB Catch' + error);
			return false;
		});
}

export async function createNewUserInDB({ uid, displayName, email, photoURL }: User) {
	await set(ref(db, `users/${uid}`), {
		displayName: displayName,
		email: email,
		photoUrl: photoURL,
	})
		.then(() => {
			console.log('createNewUserInDB - Data saved successfully');
		})
		.catch((err) => {
			console.log('createNewUserInDB - Error while creating new user: \n\n' + err.message);
		});
}

// Events page functionality
export async function getEvents(uid: string, type: string): Promise<SettlementEvent[] | false> {
	return await get(child(dbRef, `events/`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				console.log('FIREBASE - Events exists');
				const dataAsObjects: SettlementEvent[] = snapshot.val();
				const dataArray: SettlementEvent[] = Object.values(dataAsObjects);
				if (type === 'myEvents') {
					return returnMyEvents(dataArray);
				}

				if (type === 'participateEvents') {
					return returnParticipateEvents(dataArray);
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
