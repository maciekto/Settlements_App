import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import { useContext, useEffect, useState } from 'react';
import { ref, set, update } from 'firebase/database';
import { db } from '../../../services/firebase/firebase';
import AllUsersContext from '../../context/AllUsersContext';
import UserContext from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import PickUser from '../../1_Molecues/PickUser/PickUser';
import { eventId, year, month, day } from '../../utilities/generateEventId';
import Button from '../../0_Atoms/Button/Button';

type Inputs = {
	name: string;
	usersInput: string;
};

interface Props {
	type: 'create' | 'edit';
	currentEvent?: SettlementEvent;
}

export default function EventForm({ type, currentEvent }: Props) {
	const navigate = useNavigate();
	const allUsers = useContext(AllUsersContext);
	const myUser = useContext(UserContext);

	const [selectedUsers, setSelectedUsers] = useState<string[] | undefined>(undefined);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		resetField,
		setValue,
	} = useForm<Inputs>();
	// Watch users input
	const usersInput = watch('usersInput');

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (type === 'create') {
			submitNewEvent(data);
		}
		if (type === 'edit') {
			updateEvent(data);
		}
		// Check if the logged user is available
	};

	const submitNewEvent = (data: Inputs) => {
		if (myUser === undefined) {
			navigate('/login');
			return;
		}
		let eventObject = {
			id: eventId,
			date: `${year}-${month}-${day}`,
			name: data.name,
			owner: myUser?.uid,
			users: {},
		};

		// Iterate through the users that are members of event and add this event id to the participatesEvent array in DB
		if (selectedUsers !== undefined) {
			if (selectedUsers.length > 0) {
				selectedUsers.map((userUid) => {
					Object.defineProperty(eventObject.users, userUid, {
						value: userUid,
						enumerable: true,
					});
					updateUserData(userUid, eventId);
				});
			}
		}

		// Create new event in DB
		set(ref(db, 'events/' + eventId), eventObject);

		// Create new ownerOfEvent in DB
		const lengthOfUserOwnerArray = myUser?.ownerOfEvents.length;
		let targetObject = {};
		Object.defineProperty(targetObject, lengthOfUserOwnerArray, { value: eventId, enumerable: true });
		update(ref(db, `users/${myUser.uid}/ownerOfEvents`), targetObject);

		//  Go to newly created event
		navigate('/event/' + eventId);
	};

	const updateEvent = (data: Inputs) => {
		if (currentEvent === undefined) return;

		let eventObject = {
			id: currentEvent.id,
			date: currentEvent.date,
			name: data.name,
			owner: currentEvent.owner,
			users: {},
		};
		if (selectedUsers !== undefined) {
			if (selectedUsers.length > 0) {
				selectedUsers.map((userUid) => {
					Object.defineProperty(eventObject.users, userUid, {
						value: userUid,
						enumerable: true,
					});
				});
			}
		}

		set(ref(db, 'events/' + currentEvent.id), eventObject);

		const newUsers = selectedUsers?.filter((userUid) => {
			if (currentEvent.users.includes(userUid)) {
				return null;
			} else {
				return userUid;
			}
		});

		newUsers?.forEach((userUid) => {
			allUsers?.find((user) => {
				if (user.uid === userUid) {
					let newParticipateOfEventsArray = user.participateOfEvents;
					newParticipateOfEventsArray.push(currentEvent.id);
					const participateOfEventsObject = {};
					newParticipateOfEventsArray.forEach((evId, index) => {
						Object.defineProperty(participateOfEventsObject, index, { value: evId, enumerable: true });
					});

					set(ref(db, `users/${userUid}/participateOfEvents`), participateOfEventsObject);
				}
			});
		});

		const deletedUsers = currentEvent.users.filter((userUid) => {
			if (selectedUsers?.includes(userUid)) {
				return null;
			} else {
				return userUid;
			}
		});
		deletedUsers.forEach((userUid) => {
			// Get their participatesEvent array and remove only this eventid from it.

			const deletedUser = allUsers?.find((user) => {
				if (user.uid === userUid) {
					return user;
				} else {
					return false;
				}
			});

			const newParticipateOfEventsArray = deletedUser?.participateOfEvents.filter((evId) => {
				if (evId === currentEvent.id) {
					return null;
				} else {
					return evId;
				}
			});

			const participateOfEventsObject = {};
			newParticipateOfEventsArray?.forEach((evId, index) => {
				Object.defineProperty(participateOfEventsObject, index, { value: evId, enumerable: true });
			});
			set(ref(db, `users/${userUid}/participateOfEvents`), participateOfEventsObject);
		});

		navigate('/event/' + currentEvent.id);
	};

	function updateUserData(uid: string, eventId: string) {
		if (allUsers === undefined) return;

		const user: MyUser[] = allUsers.filter((user) => user.uid === uid);
		const lengthOfTargetArray = user[0].participateOfEvents.length;

		const targetObject = {};

		Object.defineProperty(targetObject, lengthOfTargetArray, { value: eventId, enumerable: true });
		console.log(targetObject);
		update(ref(db, `users/${uid}/participateOfEvents/`), targetObject);
	}

	function handleDeleteButton() {
		navigate(`/event/${currentEvent?.id}/delete`);
	}

	useEffect(() => {
		if (type === 'edit') {
			if (currentEvent !== undefined) {
				setValue('name', currentEvent.name);
				setSelectedUsers([...currentEvent.users]);
			}
		}
	}, [currentEvent]);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='grid h-full grid-rows-EventFormTemplate'>
			{/* register your input into the hook by invoking the "register" function */}
			<h1 className='mt-2 mb-2 font-bold text-xl'>
				{type === 'create' ? 'Create' : null} {type === 'edit' ? 'Edit' : null} Event
			</h1>
			<label>
				<Input
					type='text'
					defaultValue=''
					register={register('name', { required: true })}
					placeholder='Event name'
					variant={errors.name ? 'danger' : 'base'}
				/>
				{errors.name && <span className='text-themeDanger'>This field is required</span>}
			</label>

			{/* include validation with required or other standard HTML validation rules */}
			<label>
				<Input
					type='text'
					defaultValue={''}
					register={register('usersInput')}
					placeholder={'Add users'}
				/>
				<PickUser
					usersInput={usersInput}
					resetField={resetField}
					setSelectedUsers={setSelectedUsers}
					selectedUsers={selectedUsers}
				/>
			</label>
			<div className='self-end flex gap-4'>
				<Button
					variant='outlined'
					type='submit'>
					Submit
				</Button>
				{type === 'edit' ? (
					<Button
						variant='danger'
						onClick={handleDeleteButton}
						type='button'>
						Delete event
					</Button>
				) : null}
			</div>
		</form>
	);
}
