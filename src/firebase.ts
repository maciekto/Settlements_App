import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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

const database = getDatabase(firebaseApp);

export default firebaseApp;
export const db = database;
export const auth = getAuth(firebaseApp);
