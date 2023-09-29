import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface Props {
	handleMenu: () => void;
}

export default function MenuIcon({ handleMenu }: Props) {
	const [isMenuIconAnimation, setIsMenuIconAnimation] = useState(false);

	function handleClickOnIcon() {
		handleMenu();
		setIsMenuIconAnimation(true);
		setTimeout(() => {
			setIsMenuIconAnimation(false);
		}, 1000);
	}
	return (
		<div
			className={`${isMenuIconAnimation ? 'animate-pulse' : null} z-20 text-2xl grid place-items-center w-6 cursor-pointer`}
			onClick={handleClickOnIcon}>
			<FontAwesomeIcon icon={faEllipsisVertical} />
		</div>
	);
}
