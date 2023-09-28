import Button from '../../0_Atoms/Button.tsx/Button';
import { auth } from '../../../services/firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import Footer from '../Footer/Footer';

export default function Nav() {
	// SignOut Button Logic
	const navigate = useNavigate();
	function logOut() {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate('/login');
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
		<nav className='flex justify-between bg-slate-700 text-white relative p-6 rounded-b-2xl'>
			<Link to='/'>Settlements</Link>
			<div onClick={handleBurgerMenu}>BURGER MENU</div>
			<aside className={`${isMenuVisible ? 'visible' : 'hidden'}  absolute right-0 top-0 w-96 h-screenIOs bg-white grid grid-rows-AppTemplate z-10`}>
				<div className='text-right p-6 bg-slate-700 rounded-b-2xl w-full'>
					<div onClick={handleBurgerMenu}>CLOSE MENU</div>
				</div>
				<div className='text-slate-700 w-full p-6 flex flex-col items-end'>
					<p>Account</p>
					<p>text2</p>
				</div>

				<div>
					<div className='pl-6 pr-6 pb-4 w-full'>
						<Button
							onClick={logOut}
							type='CTA'>
							Log out
						</Button>
					</div>

					<Footer />
				</div>
			</aside>
		</nav>
	);
}
