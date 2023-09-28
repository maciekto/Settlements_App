import { orderByChild, query, ref } from 'firebase/database';
import { db } from './firebase';

export function testGet() {
	const users = query(ref(db, 'e'), orderByChild('owner/').equalTo());
	console.log(users);
}
