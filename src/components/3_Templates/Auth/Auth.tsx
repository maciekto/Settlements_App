import { useEffect, useState } from 'react';

import { auth } from '../../../services/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import App from '../App/App';
import { createNewUserInDB, isEmailInDB, isUidInDB, updateEventsInDBfirstSignIn, updateUserInDBfirstSignIn } from '../../../services/firebase/users/auth';
import Loader from '../../0_Atoms/Loader/Loader';

export default function Auth() {
	const navigate = useNavigate();
	const [isDatabaseUser, setIsDatabaseUser] = useState(false);

	useEffect(function () {
		onAuthStateChanged(auth, async (usr) => {
			if(!isDatabaseUser) {
				if (usr && usr.email && usr.photoURL) {
					console.log('AUTH: Logged');
					const isUserUidInDB = await isUidInDB(usr.uid);
					const isUserEmailInDB = await isEmailInDB(usr.email, usr.uid, usr.photoURL)
					if (isUserUidInDB) {
						setIsDatabaseUser(isUserUidInDB);
					} 
					
					if(!isUserUidInDB) {
						if(isUserEmailInDB) {
							await updateEventsInDBfirstSignIn(usr.email, usr.uid)
							await updateUserInDBfirstSignIn(usr.email, usr.uid, usr.photoURL)
							setIsDatabaseUser(isUserEmailInDB)
						}
					}
					
					console.log(isDatabaseUser)
					if (!isUserUidInDB && !isUserEmailInDB) {
						await createNewUserInDB(usr);
					}
	
				} else {
					navigate('/login');
				}
			}
		});
	}, [isDatabaseUser, auth]);

	return isDatabaseUser ? (
		<App />
	) : (
		<div className='h-screen'>
			<Loader size='big' />
		</div>
	);
}
