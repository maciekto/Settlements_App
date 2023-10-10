// TODO: Make This page EventCreate (while writing logic for db, learn how to structure those functions in file structure)
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import { useContext, useEffect, useState } from 'react';
import { equalTo, onValue, orderByChild, push, query, ref, set, update } from 'firebase/database';
import { auth, db } from '../../../services/firebase/firebase';
import AllUsersContext from '../../context/AllUsersContext';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

type Inputs = {
	name: string;
	users: string;
};

// TODO: Create user add component
export default function EventCreate() {
	const [filteredUsers, setFilteredUsers] = useState<MyUser[] | undefined>(undefined);
	const allUsers = useContext(AllUsersContext);
	const myUser = useContext(UserContext);
	const [selectedUsers, setSelectedUsers] = useState<string[] | undefined>(undefined);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		resetField,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (auth.currentUser === null) {
			alert('Not logged in. Please sign in.');
			return;
		}

		const date = new Date();
		let eventId = 'id';
		eventId += date.getFullYear();
		eventId += date.getMonth() + 1;
		eventId += date.getDate();
		eventId += date.getMinutes();
		eventId += date.getSeconds();
		eventId += date.getMilliseconds();
		console.log(eventId);

		const year = date.getFullYear();
		let month = `${date.getMonth() + 1}`;
		if (Number(month) < 10) {
			month = `0${month}`;
		}

		let day = `${date.getDate()}`;
		if (Number(day) < 10) {
			day = `0${day}`;
		}

		let eventObject = {
			date: `${year}-${month}-${day}`,
			name: data.name,
			owner: auth.currentUser.uid,
			users: {},
		};

		if (selectedUsers !== undefined) {
			if (selectedUsers.length > 0) {
				selectedUsers?.map((userUid) => {
					Object.defineProperty(eventObject.users, userUid, {
						value: userUid,
						enumerable: true,
					});
					updateUserData(userUid, eventId);
				});
			}
		}

		set(ref(db, 'events/' + eventId), eventObject);
		if (myUser !== undefined) {
			const lengthOfUserOwnerArray = myUser?.ownerOfEvents.length;
			let targetObject = {};
			Object.defineProperty(targetObject, lengthOfUserOwnerArray, { value: eventId, enumerable: true });
			update(ref(db, `users/${auth.currentUser.uid}/ownerOfEvents`), targetObject);
		}

		navigate('/');
	};
	const users = watch('users');

	function updateUserData(uid: string, eventId: string) {
		if (allUsers === undefined) return;

		const user: MyUser[] = allUsers.filter((user) => user.uid === uid);
		const lengthOfTargetArray = user[0].participateOfEvents.length;

		const targetObject = {};

		Object.defineProperty(targetObject, lengthOfTargetArray, { value: eventId, enumerable: true });
		console.log(targetObject);
		update(ref(db, `users/${uid}/participateOfEvents/`), targetObject);
	}

	function filterAllUsers(emailInput: string) {
		if (emailInput === undefined) {
			setFilteredUsers(undefined);
			return;
		}
		if (emailInput.length === 0) {
			setFilteredUsers(undefined);
			return;
		}

		if (emailInput.length > 0) {
			// Filter all users with current email value, and check if user is already selected. If yes, do not include user in the results.
			const filteredUsers: MyUser[] | undefined = allUsers?.filter((user) => {
				// Check if selectedUsers array is empty
				if (selectedUsers !== undefined) {
					const isUserAlreadySelected: string[] = selectedUsers.filter((useruid) => {
						if (useruid === user.uid) {
							return true;
						}
						return false;
					});
					console.log(isUserAlreadySelected);
					// Length of the array is 0 if user is not in selectedUsers array
					if (isUserAlreadySelected.length !== 0) return null;
				}

				// Check if user includes current email input value
				const isInputEmailIncluded = user.email.includes(emailInput);
				console.log(user.displayName + emailInput);

				if (isInputEmailIncluded === false) return null;
				if (isInputEmailIncluded === true) return true;
			});
			setFilteredUsers(filteredUsers);
		}
	}

	function selectUser(user: MyUser) {
		resetField('users');
		setSelectedUsers((prevValue) => {
			if (prevValue) return [...prevValue, user.uid];

			return [user.uid];
		});
	}

	function deselectUser(user: MyUser | undefined) {
		const filteredSelectedUsers = selectedUsers?.filter((uid) => {
			if (uid !== user?.uid) {
				return true;
			} else {
				return false;
			}
		});
		setSelectedUsers(filteredSelectedUsers);
	}

	useEffect(() => {
		filterAllUsers(users);
	}, [users, selectedUsers]);

	console.log(); // watch input value by passing the name of it
	return (
		<div className='bg-white rounded-2xl border-2 border-slate-700 shadow-md p-4 h-full'>
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<p className='text-lg font-bold pb-2'>Create new Event</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<Input
					type='text'
					defaultValue=''
					register={register('name')}
					placeholder='Event name'
				/>
				{/* include validation with required or other standard HTML validation rules */}
				<label className='relative block'>
					<Input
						type='text'
						defaultValue=''
						register={register('users')}
						placeholder={'Add users'}
					/>
					<div>
						{selectedUsers ? (
							<div className={`${selectedUsers.length === 0 ? 'hidden' : 'visible'} border-slate-700 border-2 rounded-2xl p-2 mb-2`}>
								{selectedUsers.map((el) => {
									const user = allUsers?.filter((user) => {
										return user.uid === el;
									})[0];
									if (user === undefined) return <>Error</>;
									return (
										<div
											onClick={() => deselectUser(user)}
											className='flex gap-2 items-center pt-1 pb-1'>
											<img
												src={user.photoUrl}
												className='w-8 rounded-2xl'
											/>
											<p className='text-xs'> {user.email}</p>
										</div>
									);
								})}
							</div>
						) : null}
					</div>
					<div className={`${filteredUsers ? 'h-20 opacity-100 p-2' : 'h-0 opacity-0 p-0'} w-full bg-white rounded-2xl border-2 border-slate-700 shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`}>
						{filteredUsers !== undefined && filteredUsers?.length > 0 ? (
							filteredUsers.map((user) => {
								return (
									<div
										onClick={() => selectUser(user)}
										className='flex gap-2 items-center p-1'>
										<img
											src={user.photoUrl}
											className='w-8 rounded-2xl'
										/>
										<p className='text-xs'> {user.email}</p>
									</div>
								);
							})
						) : (
							<div className='p-1 text-center grid items-center h-full'>User not found</div>
						)}
					</div>
				</label>

				{/* errors will return when field validation fails  */}
				{/* {errors.users && <span>This field is required</span>} */}
				<Input
					type='submit'
					placeholder={''}
					defaultValue={'Submit'}
					register={null}
				/>
			</form>
		</div>
	);
}
