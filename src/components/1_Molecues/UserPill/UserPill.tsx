import React, { useEffect } from 'react'
import UserAvatar from '../../0_Atoms/UserAvatar/UserAvatar'

type Props = {
  user: MyUser
  checked?: boolean,
  maxWFit?: boolean,
  border?: boolean
}

export default function UserPill({ user, checked = false, maxWFit = false, border = true}: Props) {

  useEffect(() => {
    
  }, [checked, user])
  return (
    <div className={`${checked ? 'bg-themeAccent' : 'bg-white'} ${maxWFit ? 'max-w-fit' : ''} ${border ? 'border-2 border-themePrimary pt-2 pb-2 pl-4 pr-4' : ''} flex items-center gap-2   rounded-2xl min-w-fit cursor-pointer`}>
      <UserAvatar myUser={user}/> {user.displayName}
    </div>
  )
}
