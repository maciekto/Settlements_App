import { useNavigate } from 'react-router-dom';
import Button from '../../0_Atoms/Button/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase/firebase';
import { useEffect, useState } from 'react';

interface Props {
	isMenuVisible: boolean;
}

export default function AsideMenu({ isMenuVisible }: Props) {
	const [asideAnimation, setAsideAnimation] = useState('animate-menuIn');
	const [styleIsMenuVisible, setStyleIsMenuVisible] = useState('hidden');

	// SignOut Button Logic
	const navigate = useNavigate();
	function logOut(): void {
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

	useEffect(() => {
		if (isMenuVisible) {
			setStyleIsMenuVisible('visible');
			setAsideAnimation('animate-menuIn');
		}

		if (!isMenuVisible) {
			setAsideAnimation('animate-menuOut');
			setTimeout(() => {
				setStyleIsMenuVisible('hidden');
			}, 400);
		}
	}, [isMenuVisible]);

	return (
		<aside className={`${asideAnimation} ${styleIsMenuVisible} absolute right-0 -top-4 w-full h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `}>
			<div className='text-right bg-transparent rounded-b-2xl w-full h-24'>
				<br />
				<br />
				<br />
			</div>
			<div className='text-slate-700 w-full p-6 flex flex-col items-end bg-white rounded-2xl border-2 border-slate-700 shadow-md'>
				<p>Account</p>
				<p>text2</p>
				<Button
					onClick={logOut}
					variant='cta'>
					Log out
				</Button>
			</div>

			<div className='text-right bg-transparent rounded-b-2xl w-full h-24'>
				<br />
				<br />
				<br />
			</div>
		</aside>
	);
}
