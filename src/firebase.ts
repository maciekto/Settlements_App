import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase } from "firebase/database";

// Get your config here
const firebaseConfig = {};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

export default firebaseApp;
export const db = database;
