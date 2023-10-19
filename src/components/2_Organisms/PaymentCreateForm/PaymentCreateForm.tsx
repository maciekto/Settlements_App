import { SubmitHandler, set, useForm } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import Button from '../../0_Atoms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { ref, remove, update } from 'firebase/database';
import { db } from '../../../services/firebase/firebase';
import AllUsersContext from '../../context/AllUsersContext';
import PickUser from '../../1_Molecues/PickUser/PickUser';

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
	
	};

	
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
