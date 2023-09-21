import { useContext, useEffect } from "react";
import { auth } from "../../../firebase";
import Button from "../../0_Atoms/Button.tsx/Button";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function App() {
	const navigate = useNavigate();

	useEffect(() => {}, []);
	console.log(auth.currentUser);
	function logOut() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/login");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	}
	return (
		<main className='p-6 text-gray-700'>
			<div>SIEMA TO JEST APKA</div>
			<Button onClick={logOut}>Log out</Button>
		</main>
	);
}
