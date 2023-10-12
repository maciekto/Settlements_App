import { useEffect, useState } from 'react';
import userIconDefault from '../../../assets/userIconDefault.jpg';
interface Props {
	imageUrl: string | undefined;
	size?: 'small' | 'medium' | 'large';
}

export default function UserAvatar({ imageUrl, size = 'small' }: Props) {
	const [sizeStyles, setSizeStyles] = useState<string | null>(null);
	const sizes = {
		small: 'w-8',
		medium: 'w-10',
		large: 'w-12',
	};

	useEffect(() => {
		setSizeStyles(sizes[size]);
	}, [sizeStyles, size]);

	return (
		<img
			className={`${sizeStyles} rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform duration-200`}
			src={imageUrl ? imageUrl : userIconDefault}
		/>
	);
}
