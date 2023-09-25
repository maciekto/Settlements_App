import Button from "../../0_Atoms/Button.tsx/Button";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState } from "react";

export default function Nav() {
	// SignOut Button Logic
	const navigate = useNavigate();
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

	// Burger menu logic
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	function handleBurgerMenu() {
		setIsMenuVisible(!isMenuVisible);
	}

	return (
		<nav className='flex justify-between '>
			<Link to='/'>Settlements</Link>
			<div onClick={handleBurgerMenu}>BURGER MENU</div>
			<aside className={`${isMenuVisible ? "visible" : "hidden"}  fixed right-0 top-0 w-full h-screen bg-white p-6 flex flex-col justify-between`}>
				<div className='text-right'>
					<div onClick={handleBurgerMenu}>CLOSE MENU</div>
					<p>Account</p>
				</div>

				<Button onClick={logOut}>Log out</Button>
			</aside>
		</nav>
	);
}
