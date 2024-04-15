import { User } from 'firebase/auth';
import { child, get, ref, set } from 'firebase/database';
import { db, dbRef } from '../firebase';
import CreateUserDB from '../../../interfaces/CreateUserDB';

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



export async function createNewUserInDB({ uid, displayName, email, photoURL }: any) {
	await set(ref(db, `users/${uid}`), {
		displayName: displayName,
		email: email,
		photoUrl: photoURL,
		participateOfEvents: {
			0: 'Initial',
		},
		ownerOfEvents: {
			0: 'Initial',
		},
	})
		.then(() => {
			console.log('createNewUserInDB - Data saved successfully');
		})
		.catch((err) => {
			console.log('createNewUserInDB - Error while creating new user: \n\n' + err.message);
		});
}
