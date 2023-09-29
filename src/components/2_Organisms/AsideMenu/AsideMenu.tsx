import { useNavigate } from 'react-router-dom';
import Button from '../../0_Atoms/Button/Button';
import Footer from '../Footer/Footer';
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
			setAsideAnimation('animate-menuIn');
			setStyleIsMenuVisible('visible');
		}

		if (!isMenuVisible) {
			setAsideAnimation('animate-menuOut');
		}
	}, [isMenuVisible]);

	return (
		<aside className={`${asideAnimation} ${styleIsMenuVisible} absolute right-0 top-0 w-96 h-screenIOs bg-transparent grid grid-rows-AppTemplate z-10 `}>
			<div className='text-right bg-transparent rounded-b-2xl w-full'>
				<br />
				<br />
				<br />
			</div>
			<div className='text-slate-700 w-full p-6 flex flex-col items-end bg-white'>
				<p>Account</p>
				<p>text2</p>
			</div>

			<div>
				<div className='pl-6 pr-6 pb-4 w-full bg-white'>
					<Button
						onClick={logOut}
						type='CTA'>
						Log out
					</Button>
				</div>
			</div>
			<div className='text-right bg-transparent rounded-b-2xl w-full'>
				<br />
				<br />
				<br />
			</div>
		</aside>
	);
}
