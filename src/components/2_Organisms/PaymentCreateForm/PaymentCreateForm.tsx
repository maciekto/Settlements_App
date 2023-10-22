import { SubmitHandler, get, set, useForm } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import Button from '../../0_Atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import AllUsersContext from '../../context/AllUsersContext';
import PickUser from '../../1_Molecues/PickUser/PickUser';
import { db, dbRef } from '../../../services/firebase/firebase';
import { child, getDatabase, onValue, ref, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { uniqueId, year, month, day } from '../../utilities/generateUniqueId';

interface Inputs {
  amount: string;
  name: string;
  usersInput: string;
  attachment: string;
}
interface Props {
	currentEvent: SettlementEvent;
}

export default function PaymentCreateForm({ currentEvent }: Props) {
	const allUsers = useContext(AllUsersContext);
	const myUser = useContext<MyUser>(UserContext);
	const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState<string[] | undefined>(undefined);


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		resetField,
		setValue,
	} = useForm<Inputs>();

  const usersInput = watch('usersInput')

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log('clicked')
		console.log(currentEvent)

		const paymentObject = {
			date: `${year}-${month}-${day}`,
			id: uniqueId,
			amount: data.amount,
			name: data.name,
			users: {},
			whopaid: myUser.uid,
		}

		if (selectedUsers !== undefined) {
			if (selectedUsers.length > 0) {
				selectedUsers.map((userUid) => {
					Object.defineProperty(paymentObject.users, userUid, {
						value: userUid,
						enumerable: true,
					});
				});
			}
		}
		update(ref(db, `events/${currentEvent.id}/payments/${uniqueId}`), paymentObject);

		// set(db, `events/${currentEvent.id}/payments`)
	};
	// console.log(dbRef)
	// get(child(dbRef, `/users`))
	// 		.then((snapshot) => {
	// 			console.log('sieamno')
	// 		})



	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='grid h-full grid-rows-EventFormTemplate'>
			{/* register your input into the hook by invoking the "register" function */}
			<h1 className='mt-2 mb-2 font-bold text-xl'>Add new Payment</h1>
			<label>
				<Input
					type='number'
					defaultValue=''
					register={register('amount', { required: true })}
					placeholder={'Amount'}
					variant={errors.amount ? 'danger' : 'outline'}
				/>
				{errors.amount && <span className='text-themeDanger'>This field is required</span>}
			</label>
      <label>
				<Input
					type='text'
					defaultValue=''
					register={register('name', { required: true })}
					placeholder={'Payment Name'}
					variant={errors.amount ? 'danger' : 'outline'}
				/>
				{errors.amount && <span className='text-themeDanger'>This field is required</span>}
			</label>
      <label>
				<Input
					type='text'
					defaultValue={''}
					register={register('usersInput')}
					placeholder={'Add users'}
          variant='outline'
				/>
				<PickUser
          variant='payment'
					usersInput={usersInput}
					resetField={resetField}
					setSelectedUsers={setSelectedUsers}
					selectedUsers={selectedUsers}
					// inputs={}
				/>
			</label>
			<Button
				variant='cta'
				type='submit'>
				Submit
			</Button>
		</form>
	);
}
