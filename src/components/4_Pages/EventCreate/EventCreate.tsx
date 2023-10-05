// TODO: Make This page EventCreate (while writing logic for db, learn how to structure those functions in file structure)
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../0_Atoms/Input/Input';
import { useEffect, useState } from 'react';
import { equalTo, onValue, orderByChild, query, ref } from 'firebase/database';
import { db } from '../../../services/firebase/firebase';

type Inputs = {
	EventName: string;
	Users: string;
};

// TODO: Create user add component
export default function EventCreate() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	const [user, setUser] = useState<MyUser | undefined>(undefined);
	const users = watch('Users');

	async function getUsers(mail: string) {
		const userQuery = query(ref(db, 'users/'), orderByChild('email'), equalTo(mail));
		await onValue(userQuery, (snapshot) => {
			if (snapshot.exists()) {
				console.log(snapshot.val());
				let userData: MyUser[] = Object.values(snapshot.val());
				console.log(userData);
				setUser(userData[0]);
			} else {
				setUser(undefined);
			}
		});
	}
	useEffect(() => {
		getUsers(users);
	}, [users]);

	console.log(); // watch input value by passing the name of it
	return (
		<main className='h-full border-2 border-slate-700 rounded-2xl p-4'>
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<p className='text-lg font-bold pb-2'>Create new Event</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<Input
					type='text'
					defaultValue='Event name'
					register={register('EventName')}
					placeholder='Event name'
				/>
				{/* include validation with required or other standard HTML validation rules */}
				<label className='relative block'>
					<Input
						type='text'
						defaultValue=''
						register={register('Users', { required: true })}
						placeholder={'Add users'}
					/>

					<div className={`${users ? 'h-14 opacity-100 p2' : 'h-0 opacity-0 p-0'} w-full bg-white absolute top-16 rounded-2xl border-2 border-slate-700 p-2 shadow-2xl transition-all duration-1000 flex items-center`}>
						{user !== undefined ? (
							<div className='flex gap-4 items-center'>
								{user.displayName}
								<img
									src={user.photoUrl}
									className='w-8 rounded-2xl'
								/>
							</div>
						) : (
							<div>Not found</div>
						)}
					</div>
				</label>

				{/* errors will return when field validation fails  */}
				{errors.Users && <span>This field is required</span>}
				<div className='h-96 w-full'></div>
				<Input
					type='submit'
					placeholder={''}
					defaultValue={'Submit'}
					register={null}
				/>
			</form>
		</main>
	);
}
