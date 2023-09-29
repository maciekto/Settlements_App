import { useEffect, useState } from 'react';

import { auth } from '../../../services/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import App from '../App/App';
import { createNewUserInDB, isUserInDB } from '../../../services/firebase/users/auth';
import Loader from '../../0_Atoms/Loader/Loader';

export default function Auth() {
	const navigate = useNavigate();
	const [isDatabaseUser, setIsDatabaseUser] = useState(false);

	useEffect(function () {
		onAuthStateChanged(auth, async (usr) => {
			if (usr) {
				console.log('AUTH: Logged');
				const isUser = await isUserInDB(usr);
				if (isUser) {
					setIsDatabaseUser(isUser);
				}
				if (!isUser) {
					await createNewUserInDB(usr);
				}
			} else {
				navigate('/login');
			}
		});
	}, []);

	return isDatabaseUser ? (
		<App />
	) : (
		<div className='h-screen'>
			<Loader size='big' />
		</div>
	);
}
