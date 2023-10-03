import { get, ref } from 'firebase/database';
import { db, dbRef } from '../firebase';

// export async function getUser(userUid: string): Promise<MyUser | false> {
// 	console.log('bang');
// 	return await get(ref(db, `/users/${userUid}`)).then((snapshot) => {
// 		if (snapshot.exists()) {
// 			return snapshot.val();
// 		}
// 		return false;
// 	});
// }
