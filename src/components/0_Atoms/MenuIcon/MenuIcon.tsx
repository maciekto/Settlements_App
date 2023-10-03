import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';

interface Props {
	handleMenu: () => void;
}

export default function MenuIcon({ handleMenu }: Props) {
	const [isMenuIconAnimation, setIsMenuIconAnimation] = useState(false);
	const myUser = useContext(UserContext);

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
			<img
				className='rounded-full border border-slate-700 w-full'
				src={myUser?.photoUrl}
			/>
			{/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
		</div>
	);
}
