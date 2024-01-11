import React, { useContext } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';

import { ref, update } from 'firebase/database';
import AllUsersContext from '../../context/AllUsersContext';
import UserContext from '../../context/UserContext';
import { useParams } from 'react-router-dom';
import getUser from '../../utilities/getUser';
import Button from '../../0_Atoms/Button/Button';
import { db } from '../../../services/firebase/firebase';
import Input from '../../0_Atoms/Input/Input';

type Inputs = {
  name: string;
  phoneNumber: string;
  bankAccountNumber: string;
}

export default function UserForm() {
  const allUsers = useContext(AllUsersContext)
  const myUser = useContext(UserContext)
  const params = useParams()
  if(params.id == undefined) {
    return
  }
  const user = getUser(params.id, allUsers)

  const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		resetField,
		setValue,
	} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    const updatedUser: MyUser = {
      ...user,
      phoneNumber: data.phoneNumber,
      displayName: data.name,
      bankAccountNumber: data.bankAccountNumber
    }
    update(ref(db, `users/${user.uid}`), updatedUser);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Input type='text' placeholder='Name' defaultValue={user.displayName == 'Name' ? '' : user.displayName} register={register('name')} variant={'outline'}/>
        <Input type='text' placeholder='Phone number' defaultValue={`${user.phoneNumber ? user.phoneNumber : ''}`} register={register('phoneNumber')} variant={'outline'}/>
        <Input type='text' placeholder='Bank account number' defaultValue={`${user.bankAccountNumber ? user.bankAccountNumber : ''}`} register={register('bankAccountNumber')} variant={'outline'}/>
        <Button variant={'cta'} type='submit'>Submit</Button>
      </form>
  )
}
