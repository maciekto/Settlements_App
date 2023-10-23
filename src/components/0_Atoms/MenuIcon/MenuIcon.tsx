// import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import UserAvatar from '../UserAvatar/UserAvatar';

interface Props {
	handleMenu: () => void;
}

export default function MenuIcon({ handleMenu }: Props) {
	const [isMenuIconAnimation, setIsMenuIconAnimation] = useState(false);
	const myUser = useContext(UserContext);
	if (myUser === undefined) return null;

	function handleClickOnIcon() {
		handleMenu();
		setIsMenuIconAnimation(true);
		setTimeout(() => {
			setIsMenuIconAnimation(false);
		}, 300);
	}
	return (
		<div
			className={`${isMenuIconAnimation ? 'animate-pulse' : null} z-20 text-2xl grid place-items-center w-8 cursor-pointer`}
			onClick={handleClickOnIcon}>
			{/*  */}
			<UserAvatar
				myUser={myUser}
				navigation={false}
			/>
			{/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
		</div>
	);
}
