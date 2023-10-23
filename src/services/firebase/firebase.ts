import { initializeApp } from 'firebase/app'; // no compat for new SDK
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

// Get your config here

const firebaseApp = initializeApp(firebaseConfig);

// For onValue call to database
const database = getDatabase(firebaseApp);
// For one call to db
export const dbRef = ref(getDatabase());

export default firebaseApp;
export const db = database;
export const auth = getAuth(firebaseApp);
