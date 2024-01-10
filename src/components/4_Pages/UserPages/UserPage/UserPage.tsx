import React, { useContext } from 'react'
import Button from '../../../0_Atoms/Button/Button'
import { useNavigate, useParams } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../services/firebase/firebase';
import UserContext from '../../../context/UserContext';
import getUser from '../../../utilities/getUser';
import AllUsersContext from '../../../context/AllUsersContext';
import UserAvatar from '../../../0_Atoms/UserAvatar/UserAvatar';

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
  return (
    <>
      <UserAvatar myUser={user} />
      <div>
        {user.displayName}
      </div>
      <div>
      <div>
        Phone Number
      </div>
      <div>
        Bank account number
      </div>

      </div>

      {params.id == myUser.uid ? 
        <Button
          onClick={logOut}
          variant='cta'>
          Log out
        </Button>
      : null
      }
      
    </>
  )
}
