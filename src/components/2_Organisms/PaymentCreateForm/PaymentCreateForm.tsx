import { SubmitHandler, get, set, useForm } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import Button from '../../0_Atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import AllUsersContext from '../../context/AllUsersContext';
import PickUser from '../../1_Molecues/PickUser/PickUser';
import { db, dbRef } from '../../../services/firebase/firebase';
import { child, getDatabase, onValue, ref, update } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { generateUniqueId, year, month, day } from '../../utilities/generateUniqueId';
import UserAvatar from '../../0_Atoms/UserAvatar/UserAvatar';

type Inputs = {
  amount: string;
  name: string;
}
interface Props {
	currentEvent: SettlementEvent;
}

type UserPayment = {
	uid: string;
	checked: boolean;
	value: number;
}

export default function PaymentCreateForm({ currentEvent }: Props) {

	const myUser = useContext<MyUser>(UserContext);
	const navigate = useNavigate();
	const [paymentUsers, setPaymentUsers] = useState<UserPayment[]>([]);
	const [ownerUser, setOwnerUser] = useState<UserPayment>({
		uid: currentEvent.owner,
		checked: true,
		value: 0
	})


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setError,
		resetField,
		setValue,
	} = useForm<Inputs>();

	const amountInput = watch('amount')



const onSubmit: SubmitHandler<Inputs> = async (data) => {

	const uniqueId = generateUniqueId();
		const paymentObject = {
			date: `${year}-${month}-${day}`,
			id: uniqueId,
			amount: data.amount,
			name: data.name,
			users: {},
			whopaid: {
				uid: myUser.uid,
				value: ownerUser.value
			}
		}


		if (paymentUsers !== undefined) {
			if (paymentUsers.length > 0) {
				paymentUsers.map((user) => {

					const userPaymentObject = {
						uid: user.uid,
						value: user.value,
						id: generateUniqueId()
					}
					if(user.checked) {
						Object.defineProperty(paymentObject.users, user.uid, {
							value: userPaymentObject,
							enumerable: true,
						});
					}
					
				});
			}
		}

		let sum = 0;
		if(ownerUser.checked) {
			sum += Number(ownerUser.value)
		}

		paymentUsers.forEach((el) => {
			if(el.checked) {
				console.log(el.uid)
				sum += Number(el.value)
			}
		})

		if(sum != Number(amountInput)) {
			setError('amount', { type: "focus" })
		}

		if(sum == Number(amountInput)) {
			await update(ref(db, `events/${currentEvent.id}/payments/${uniqueId}`), paymentObject);
			navigate('/event/' + currentEvent.id)
		}
		

		// set(db, `events/${currentEvent.id}/payments`)
	};

	function handleOwnerChecked(e: any) {
		setOwnerUser({
			uid: ownerUser.uid,
			value: ownerUser.value,
			checked: !ownerUser.checked
		})
	}
	function handleOwnerValue(e: any) {
		setOwnerUser({
			uid: ownerUser.uid,
			value: e.target.value,
			checked: ownerUser.checked
		})
	}


	function handleChecked(e: any) {
		setPaymentUsers((prevValue) => {
			const bang: UserPayment[] = prevValue.map((el: UserPayment) => {
				if(el.uid === e.target.name) {
					return {
						uid: el.uid,
						checked: !el.checked,
						value: el.value
					}
				} else {
					return el
				}
			})
			return [...bang]
		})
	}
	function handleValue(e: any) {
		console.log('handleValue')
		setPaymentUsers((prevValue) => {
			const bang: UserPayment[] = prevValue.map((el: UserPayment) => {
				if(el.uid === e.target.name) {
					return {
						uid: el.uid,
						checked: el.checked,
						value: e.target.value
					}
				} else {
					return el
				}
			})
			return [...bang]
		})
	}

	// Set inital state of paymentUsers from currentEvent.users object
	function setPaymentUsersOnStartup() {
		console.log('setPaymentUsersOnStartup')
			currentEvent.users.map((user) => {
				if(user === 'defaultUID') return null
				
				setPaymentUsers((prevValue) => {
					const checkIfAlreadyExists = prevValue.filter((el) => {
						if(el.uid === user) return el 
					})
					
					if(checkIfAlreadyExists.length > 0)
						return [...prevValue]
					else
						if(user === myUser.uid) {
							return [...prevValue, {
								uid: currentEvent.owner,
								checked: false,
								value: 0
							}]
						}
						return [...prevValue, {
							uid: user,
							checked: false,
							value: 0
						}]
				})
			})
		
	}

	// Set initail state of ownerUser. Need to do that because on start myUser context have defaultUser and that's why myUser is set in useEffect function
	function setOwnerUserOnStartup() {
		setOwnerUser(() => {
			return {
				uid: myUser.uid,
				checked: true,
				value: 0
			}
		})
	}
	
	useEffect(() => {
		setPaymentUsersOnStartup();
		setOwnerUserOnStartup();
	}, [currentEvent, myUser])
	

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
				{errors.amount && <span className='text-themeDanger'>This field is required and General amount has to be the same as value of sum of all people included</span>}
			</label>
      <label>
				<Input
					type='text'
					defaultValue=''
					register={register('name', { required: true })}
					placeholder={'Payment Name'}
					variant={errors.name ? 'danger' : 'outline'}
				/>
				{errors.name && <span className='text-themeDanger'>This field is required</span>}
			</label>



				<label>
					<input type='checkbox' name={ownerUser.uid} checked={ownerUser.checked} onChange={handleOwnerChecked}/>
					{ownerUser.uid}
					<input type='number' name={ownerUser.uid} value={ownerUser.value} onChange={handleOwnerValue} step={'any'}/>
				</label>
				
				{paymentUsers.map((el, index) => {
					return <label key={index}>
						<input type='checkbox' name={el.uid} onChange={handleChecked} checked={el.checked}/>
						{el.uid}
						<input type='number' name={el.uid} value={el.value} onChange={handleValue} step={'any'}/>
					</label>
				})}
					

      {/* <label>
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
			</label> */}
			<Button
				variant='cta'
				type='submit'>
				Submit
			</Button>

		</form>
	);
}
