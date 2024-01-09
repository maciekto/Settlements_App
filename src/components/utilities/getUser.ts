import { defaultMyUser } from "./defaultUser";




  export default function getUser(uid: string, usersArray: MyUser[]): MyUser {
    const selectedUser: MyUser[] = usersArray.filter((user: MyUser) => {
      if(user.uid === uid) {
        return true
      } 
      return false;
    })

    if(selectedUser.length > 0) {
      return selectedUser[0]
    }

    else {
      return defaultMyUser
    }
    
  }
