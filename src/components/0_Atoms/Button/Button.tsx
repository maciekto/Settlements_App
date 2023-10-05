import { useEffect, useState } from 'react';

interface Props {
	onClick: () => void;
	children: string;
	variant: 'cta' | 'base' | 'outlined';
}

export default function Button({ onClick, children, variant }: Props) {
	const [variantStyles, setVariantStyles] = useState<string | null>(null);
	const [onClickAnim, setOnClickAnim] = useState('shadow-lg');

	const variants = {
		cta: 'bg-themeBlue text-white',
		base: 'bg-white text-themeBlue border border-slate-50',
		outlined: 'bg-white text-themeBlue',
	};

	// const sizes = {
	// 	small: '',
	// 	medium: '',
	// 	large: ''
	// }

	// Types

	useEffect(() => {
		setVariantStyles(variants[variant]);
	}, [variantStyles]);

	function handleClick() {
		setOnClickAnim('shadow-sm');
		setTimeout(() => {
			setOnClickAnim('shadow-lg');
			onClick();
		}, 200);
	}

	return (
		<input
			type='button'
			onClick={() => handleClick()}
			value={children}
			className={`h-12 p-2 border-2 border-themeBlue rounded-2xl mt-4 mb-4 cursor-pointer w-full ${variantStyles} ${onClickAnim}  transition-shadow duration-200`}
		/>
	);
}
