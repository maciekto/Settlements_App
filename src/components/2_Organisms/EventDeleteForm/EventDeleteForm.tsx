import { SubmitHandler, set, useForm } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import Button from '../../0_Atoms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { ref, remove, update } from 'firebase/database';
import { db } from '../../../services/firebase/firebase';
import AllUsersContext from '../../context/AllUsersContext';

interface Inputs {
	eventName: string;
}
interface Props {
	currentEvent: SettlementEvent;
}

export default function EventDeleteForm({ currentEvent }: Props) {
	const allUsers = useContext(AllUsersContext);
	const myUser = useContext<MyUser>(UserContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		resetField,
		setValue,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (currentEvent.id === data.eventName) {
			// Update ownerOfEvent
			const indexOfEvent = myUser.ownerOfEvents.indexOf(data.eventName);
			const ownerArrayObject = {};
			Object.defineProperty(ownerArrayObject, indexOfEvent, { value: null, enumerable: true });
			update(ref(db, `users/${myUser.uid}/ownerOfEvents/`), ownerArrayObject);

			currentEvent.users.forEach((userUID) => {
				updateUserData(userUID, currentEvent.id);
			});

			// Remove event
			remove(ref(db, `events/${data.eventName}`)).then(() => {
				navigate('/');
			});
		}
	};

	function updateUserData(uid: string, eventId: string) {
		if (allUsers === undefined) return;

		const user: MyUser = allUsers.filter((user) => user.uid === uid)[0];

		const indexOfEvent = user.participateOfEvents.indexOf(eventId);
		const targetObject = {};

		Object.defineProperty(targetObject, indexOfEvent, { value: null, enumerable: true });

		update(ref(db, `users/${uid}/participateOfEvents/`), targetObject);
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='grid h-full grid-rows-EventFormTemplate'>
			{/* register your input into the hook by invoking the "register" function */}
			<h1 className='mt-2 mb-2 font-bold text-xl'>Delete Event</h1>
			<p>
				Type event id to delete event <span className='text-themeDanger'>{currentEvent.id}</span>
			</p>
			<label>
				<Input
					type='text'
					defaultValue=''
					register={register('eventName', { required: true })}
					placeholder={'Event id'}
					variant={errors.eventName ? 'danger' : 'base'}
				/>
				{errors.eventName && <span className='text-themeDanger'>This field is required</span>}
			</label>
			<Button
				variant='danger'
				type='submit'>
				Submit
			</Button>
		</form>
	);
}
