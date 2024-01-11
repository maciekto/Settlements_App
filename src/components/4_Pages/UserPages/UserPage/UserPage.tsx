import React, { useContext, useEffect } from 'react'
import Button from '../../../0_Atoms/Button/Button'
import { useNavigate, useParams } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../../../services/firebase/firebase';
import UserContext from '../../../context/UserContext';
import getUser from '../../../utilities/getUser';
import AllUsersContext from '../../../context/AllUsersContext';
import UserAvatar from '../../../0_Atoms/UserAvatar/UserAvatar';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../0_Atoms/Input/Input';
import UserPill from '../../../1_Molecues/UserPill/UserPill';
import { ref, update } from 'firebase/database';
import UserForm from '../../../2_Organisms/UserForm/UserForm';



export default function UserPage() {
  const allUsers = useContext(AllUsersContext)
  const myUser = useContext(UserContext)
  const params = useParams()
  if(params.id == undefined) {
    return
  }
  const user = getUser(params.id, allUsers)

 



  const navigate = useNavigate();
	function logOut(): void {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate('/login');
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	}

	const copyToClipboard = (value: any) => {
    navigator.clipboard.writeText(value ? value : '')
  }

  useEffect(() => {

  }, [user, myUser])
  return (
    <>
      <div className='mb-8 flex flex-col gap-2 border-2 border-themePrimary rounded-2xl p-4'>
        <UserPill user={user} border={false}/>
        <div title={`Click to copy ${user.phoneNumber}`} className='cursor-pointer' onClick={() => copyToClipboard(user.phoneNumber)}>Phone number: {user.phoneNumber}</div>
        <div title={`Click to copy ${user.bankAccountNumber}`} className='cursor-pointer' onClick={() => copyToClipboard(user.bankAccountNumber)}> Bank Account: {user.bankAccountNumber}</div>
       
        
      </div>
      {myUser.uid === user.uid ? <UserForm /> : null}
      
      {params.id == myUser.uid ? 
        <Button
          onClick={logOut}
          variant='outlined'>
          Log out
        </Button>
      : null
      }
      
    </>
  )
}
