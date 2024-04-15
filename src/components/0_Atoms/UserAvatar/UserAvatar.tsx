import { useEffect, useState } from 'react';
import userIconDefault from '../../../../public/userIconDefault.jpg';
import { useNavigate } from 'react-router-dom';
interface Props {
	myUser?: MyUser;
	size?: 'small' | 'medium' | 'large';
	onClick?: () => void;
}

export default function UserAvatar({ myUser, size = 'small', onClick }: Props) {
	const [sizeStyles, setSizeStyles] = useState<string | null>(null);
	const navigate = useNavigate()
	const sizes = {
		small: 'w-8',
		medium: 'w-10',
		large: 'w-12',
	};

	function handleClick() {
		if(onClick) onClick();
		navigate(`/user/${myUser?.uid}`)
		console.log(myUser)
	}

	useEffect(() => {
		setSizeStyles(sizes[size]);
	}, [sizeStyles, size, myUser]);

	return (
		<img
			onClick={handleClick}
			className={`${sizeStyles} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`}
			src={myUser?.photoUrl ? myUser?.photoUrl : userIconDefault}
		/>
	);
}
