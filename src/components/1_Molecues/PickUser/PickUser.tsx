import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { UseFormResetField } from 'react-hook-form';
import AllUsersContext from '../../context/AllUsersContext';
import UserContext from '../../context/UserContext';
import UserAvatar from '../../0_Atoms/UserAvatar/UserAvatar';
import Button from '../../0_Atoms/Button/Button';
import { Link, useParams } from 'react-router-dom';
type Inputs = {
	amount: string;
  name: string;
  usersInput: string;
  attachment: string;
};
interface Props {
	variant?: 'base' | 'payment';
	usersInput: string;
	resetField: UseFormResetField<Inputs>;
	setSelectedUsers: Dispatch<SetStateAction<string[] | undefined>>;
	selectedUsers: string[] | undefined;
	inputs?: Object;
}

export default function PickUser({ usersInput, resetField, setSelectedUsers, selectedUsers, variant }: Props) {
	const params = useParams()
	const allUsers = useContext(AllUsersContext);
	const myUser = useContext(UserContext);
	const [filteredUsers, setFilteredUsers] = useState<MyUser[] | undefined>(undefined);

	function filterAllUsers(userInput: string) {
		if (userInput === undefined) {
			setFilteredUsers(undefined);
			return;
		}
		if (userInput.length === 0) {
			setFilteredUsers(undefined);
			return;
		}

		if (userInput.length > 0) {
			// Filter all users with current email value, and check if user is already selected. If yes, do not include user in the results.
			const filteredUsers: MyUser[] | undefined = allUsers?.filter((user) => {
				if (selectedUsers !== undefined) {
					const isUserAlreadySelected: string[] = selectedUsers.filter((useruid) => {
						if (useruid === user.uid) {
							return true;
						}
						return false;
					});
					
					// Length of the array is 0 if user is not in selectedUsers array
					if (isUserAlreadySelected.length !== 0) return null;
				}

				// Do not show my user on the list of availble users to add
				if (user.uid === myUser?.uid) return null;

				// Check if user includes current email input value
				const isInputEmailIncluded = user.email.includes(userInput);
				if (isInputEmailIncluded === false) return null;
				if (isInputEmailIncluded === true) return true;
			});
			setFilteredUsers(filteredUsers);
		}
	}
	function selectUser(user: MyUser) {
		resetField('usersInput');
		setSelectedUsers((prevValue) => {
			if (prevValue) return [...prevValue, user.uid];

			return [user.uid];
		});
	}

	function deselectUser(user: MyUser | undefined) {
		const filteredSelectedUsers = selectedUsers?.filter((uid) => {
			if (uid !== user?.uid) {
				return true;
			} else {
				return false;
			}
		});
		setSelectedUsers(filteredSelectedUsers);
	}

	useEffect(() => {
		filterAllUsers(usersInput);
	}, [usersInput, selectedUsers]);

	return (
		<>
			<div>
				{/* Render selected users above select user input */}
				{selectedUsers ? (
					<div className={`${selectedUsers.length === 0 ? 'hidden' : 'visible'} border-themePrimary border-2 rounded-2xl p-2 mb-2`}>
						{selectedUsers.map((el) => {
							const user = allUsers?.filter((user) => {
								return user.uid === el;
							})[0];
							if (user === undefined) return <>Error</>;
							return (
								<div className='flex gap-2 items-center pt-1 pb-1 flex-col'>
										<div className='flex gap-2  pt-1 pb-1 w-full'>
											<div className='flex w-full gap-2'>
												<UserAvatar myUser={user} onClick={() => deselectUser(user)}/>
												<p className='text-xs'> {user.email}</p>
											</div>
											
									
											<div onClick={() => deselectUser(user)} className='p-2 border-2 h-8 w-8 border-themePrimary rounded-full flex items-center justify-center cursor-pointer'>
												<div className='w-4 h-[2px] bg-themeDanger'>
												
												</div>
											</div>
								
										</div>
								
									{/* {variant === 'payment' ? <>
										<div className='w-4'></div>
										<Input type={'number'} placeholder={'amount'} defaultValue={''} register={null} />
									</> : null} */}
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className={`${filteredUsers ? 'h-32 opacity-100 p-2' : 'h-0 opacity-0 p-0'} w-full bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-2xl transition-all duration-500 flex  flex-col overflow-scroll`}>
				{filteredUsers !== undefined && filteredUsers?.length > 0 ? (
					filteredUsers.map((user) => {
						return (
							<div
								onClick={() => selectUser(user)}
								className='flex gap-2 items-center p-1'>
								<UserAvatar myUser={user} />
								<p className='text-xs'> {user.email}</p>
							</div>
						);
					})
				) : (
					<div className='p-1 text-center grid items-center h-full'>User not found</div>
				)}
				<Link to={`/event/${params.id}/createUser`}>
					<Button variant='cta'>Add new member</Button>
				</Link>

			</div>
		</>
	);
}
