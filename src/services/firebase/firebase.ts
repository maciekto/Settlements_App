import { initializeApp } from 'firebase/app'; // no compat for new SDK
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Get your config here
const firebaseConfig = {
  apiKey: "AIzaSyD4U3KSH6xALT0tOsGXJ-a9m9Ud4-Q-sAE",
  authDomain: "portfoliosettlements.firebaseapp.com",
  databaseURL: "https://portfoliosettlements-default-rtdb.firebaseio.com",
  projectId: "portfoliosettlements",
  storageBucket: "portfoliosettlements.appspot.com",
  messagingSenderId: "476678319901",
  appId: "1:476678319901:web:6956f285d3fcd21a937bf4",
  measurementId: "G-5LS5T94WQZ"
};

const firebaseApp = initializeApp(firebaseConfig);

// For onValue call to database
const database = getDatabase(firebaseApp);
// For one call to db
export const dbRef = ref(getDatabase());

export default firebaseApp;
export const db = database;
export const auth = getAuth(firebaseApp);
