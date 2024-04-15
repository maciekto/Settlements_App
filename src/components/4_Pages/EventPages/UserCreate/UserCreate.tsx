import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { createNewUserInDB } from '../../../../services/firebase/users/auth';
import Input from '../../../0_Atoms/Input/Input';
import Button from '../../../0_Atoms/Button/Button';
import { useParams } from 'react-router-dom';

type Inputs = {
  eventId: string;
	userName: string;
	userEmail: string;
};

function UserCreate() {

  const params = useParams()

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

	const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
		// createNewUserInDB()
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