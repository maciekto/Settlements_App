import { useEffect, useState } from 'react';

import { auth } from '../../../services/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import App from '../App/App';
import { createNewUserInDB, isUserInDB } from '../../../services/firebase/users/auth';

export default function Auth() {
	const navigate = useNavigate();
	const [isDatabaseUser, setIsDatabaseUser] = useState(false);

	useEffect(function () {
		onAuthStateChanged(auth, async (usr) => {
			if (usr) {
				console.log('AUTH: Logged');
				const isUser = await isUserInDB(usr);
				if (isUser) {
					// TODO: Write loader
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

	return isDatabaseUser ? <App /> : <div className='w-full h-screen flex justify-center items-center'>LOADING</div>;
}
