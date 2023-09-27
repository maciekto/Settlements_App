import { useEffect } from 'react';

import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../../0_Atoms/Button.tsx/Button';
import { GoogleAuthProvider } from 'firebase/auth';

export default function LoginPage() {
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate('/');
			} else {
				navigate('/login');
			}
		});
	}, []);

	function redirectToGoogle() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);

				if (credential === null) return;

				const token = credential.accessToken;
				console.log(token);
				// The signed-in user info.
				// const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
			})
			.catch((error) => {
				console.log(error.message);
				// Handle Errors here.
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// The email of the user's account used.
				// const email = error.customData.email;
				// The AuthCredential type that was used.
				// const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	}

	return (
		<div className='p-6 flex justify-center w-full h-screen items-center'>
			<div className='w-96 text-center'>
				You are logged out <br />
				<Button
					onClick={redirectToGoogle}
					type='CTA'>
					Sign In With Google
				</Button>
			</div>
		</div>
	);
}
