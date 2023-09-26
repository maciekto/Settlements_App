import { initializeApp } from "firebase/app"; // no compat for new SDK
import { child, get, getDatabase, ref, set } from "firebase/database";
import { User, getAuth } from "firebase/auth";

// Get your config here
const firebaseConfig = {
	apiKey: "AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",
	authDomain: "portfoliosettlements.firebaseapp.com",
	projectId: "portfoliosettlements",
	storageBucket: "portfoliosettlements.appspot.com",
	messagingSenderId: "476678319901",
	appId: "1:476678319901:web:6956f285d3fcd21a937bf4",
	measurementId: "G-5LS5T94WQZ",
	databaseURL: "https://portfoliosettlements-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);

// For onValue call to database
const database = getDatabase(firebaseApp);
// For one call to db
export const dbRef = ref(getDatabase());

export default firebaseApp;
export const db = database;
export const auth = getAuth(firebaseApp);

export async function isUserInDB(user: User) {
	return await get(child(dbRef, `users/${user.uid}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				// console.log(snapshot.val());
				console.log("FIREBASE - User exists in DB");
				return true;
			}

			if (!snapshot.exists()) {
				console.log("FIREBASE - User not found in DB");
				return false;
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

export async function createNewUserInDB({ uid, displayName, email, photoURL }: User) {
	await set(ref(db, `users/${uid}`), {
		displayName: displayName,
		email: email,
		photoUrl: photoURL,
	})
		.then(() => {
			console.log("FIREBASE - Data saved successfully");
		})
		.catch((err) => {
			console.log("FIREBASE - Error while creating new user: \n\n" + err.message);
		});
}

export async function getEvents(uid: string, type: string) {
	return await get(child(dbRef, `events/`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				console.log("FIREBASE - Events exists");
				const dataAsObjects: Event[] = snapshot.val();
				const dataArray: Event[] = Object.values(dataAsObjects);
				if (type === "myEvents") {
					return returnMyEvents(dataArray);
				}

				if (type === "participateEvents") {
					return returnParticipateEvents(dataArray);
				}
			}

			if (!snapshot.exists()) {
				console.log("FIREBASE - Events not found in DB");
				return null;
			}
		})
		.catch((error) => {
			console.error(error);
			return null;
		});

	function returnMyEvents(dataArray: Event[]): (false | Event)[] {
		const events = dataArray.map((el): Event | false => {
			if (el.owner == uid) {
				return el;
			} else {
				return false;
			}
		});
		const userEvents = events.filter((el) => el !== false);
		return userEvents;
	}

	function returnParticipateEvents(dataArray: Event[]) {
		const events = dataArray.filter((el) => {
			const isIncluded = el.users.includes(uid);
			if (isIncluded) return el;
		});
		return events;
	}
}
