import React, { useContext, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { createNewUserInDB, isUserInDB } from '../../../../services/firebase/users/auth';
import Input from '../../../0_Atoms/Input/Input';
import Button from '../../../0_Atoms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuth, sendSignInLinkToEmail, User } from 'firebase/auth';
import { generateUniqueId } from '../../../utilities/generateUniqueId';
import userIconDefault from '../../../../assets/userIconDefault.jpg';
import CreateUserDB from '../../../../interfaces/CreateUserDB';
import getUser from '../../../utilities/getUser';
import AllUsersContext from '../../../context/AllUsersContext';
import { ref, set } from 'firebase/database';
import { db } from '../../../../services/firebase/firebase';
import getEvent from '../../../utilities/getEvent';
import AllEventsContext from '../../../context/AllEventsContext';
import MyEventContext from '../../../context/MyEventsContext';
import ParticipateEventsContext from '../../../context/ParticipateEventsContext';


type Inputs = {
  eventId: string;
	userName: string;
	userEmail: string;
};

function UserCreate() {

	const myEvents = useContext(MyEventContext)
	const participateEvents = useContext(ParticipateEventsContext)
  const params = useParams()

	const navigate = useNavigate()
  const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		resetField,
		setValue,
	} = useForm<Inputs>();
	// Watch users input
	const userName = watch('userName');
	const userEmail = watch('userEmail');

	const actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: 'https://settlements.maciejtomaszewski.com/login',
		// This must be true.
		handleCodeInApp: true,
		// iOS: {
		// 	bundleId: 'com.example.ios'
		// },
		// android: {
		// 	packageName: 'com.example.android',
		// 	installApp: true,
		// 	minimumVersion: '12'
		// },
		// dynamicLinkDomain: '^https://.*.com/.*$'
	};

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
		// sendSignInLinkToEmail(auth, data.userEmail, actionCodeSettings)
		// 	.then(() => {
		// 		// The link was successfully sent. Inform the user.
		// 		// Save the email locally so you don't need to ask the user for it again
		// 		// if they open the link on the same device.
		// 		// window.localStorage.setItem('emailForSignIn', email);
		// 		// ...
		// 		console.log('bang')
		// 	})
		// 	.catch((error) => {
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 		console.log(errorCode)
		// 		console.log(errorMessage)
		// 		// ...
		// 	});
		const uniqueUserUid = generateUniqueId()
		const user: CreateUserDB = {
			uid: uniqueUserUid,
			displayName: data.userName,
			email: data.userEmail,
			photoURL: userIconDefault
		}
		

		const participateOfEventsObject = {
			0: 'Initial',
			1: `${params.id}`
		}
		
		let event = getEvent(`${params.id}`, myEvents)

		if(!event) {
			event = getEvent(`${params.id}`, participateEvents)
		}

		if(!event) {
			throw new Error('Event does not exists')
		}

		const eventObject = {
			...event,
			users: {}
		} 

		event.users.forEach((user) => {
			Object.defineProperty(eventObject.users, user, {
				value: user,
				enumerable: true,
			});
		})

		Object.defineProperty(eventObject.users, uniqueUserUid, {
			value: uniqueUserUid,
			enumerable: true,
		});
		console.log(eventObject)

		await createNewUserInDB(user)
		await set(ref(db, `users/${uniqueUserUid}/participateOfEvents`), participateOfEventsObject);
		await set(ref(db, 'events/' + `${params.id}`), eventObject);
		
		navigate(`/event/${params.id}`)

	};

  


  useEffect(() => {
    setValue('eventId', params.id !== null ? `${params.id}` : '')
  }, [params])


  return (
    <div className='h-full'>
      <form
			onSubmit={handleSubmit(onSubmit)}
			className='flex h-full flex-col'>
			{/* register your input into the hook by invoking the "register" function */}
			<h1 className='mt-2 mb-2 font-bold text-xl'>
				Create new member
			</h1>
      <label>
				<Input
					type='text'
					defaultValue={``}
					register={register('eventId')}
        
					placeholder='User name'
					variant={'disabled'}
				/>
				{errors.eventId && <span className='text-themeDanger'>This field is required</span>}
			</label>
			<label>
				<Input
					type='text'
					defaultValue=''
					register={register('userName', { required: true })}
					placeholder='User name'
					variant={errors.userName ? 'danger' : 'outline'}
				/>
				{errors.userName && <span className='text-themeDanger'>This field is required</span>}
			</label>

			{/* include validation with required or other standard HTML validation rules */}
			<label>
				<Input
					type='text'
					defaultValue={''}
					register={register('userEmail')}
					placeholder={'User email'}
					variant='outline'
				/>
			</label>
      <div className='h-full'></div>
			<div className='self-end flex gap-4 w-full'>
				<Button
					variant='outlined'
					type='submit'>
					Submit
				</Button>
			</div>
		</form>
    </div>
  )
}

export default UserCreate