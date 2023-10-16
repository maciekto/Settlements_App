import { useEffect, useState } from 'react';

interface Props {
	onClick?: any;
	children: string;
	variant: 'cta' | 'base' | 'outlined' | 'danger';
	type?: 'button' | 'submit';
}

export default function Button({ onClick, children, variant, type = 'button' }: Props) {
	const [variantStyles, setVariantStyles] = useState<string | null>(null);
	const [onClickAnim, setOnClickAnim] = useState('shadow-md');

	const variants = {
		cta: 'bg-themePrimary text-themeWhite',
		base: 'bg-themeWhite text-themePrimary border border-themeGray',
		outlined: 'bg-themeWhite text-themePrimary',
		danger: 'bg-themeDanger text-themeWhite',
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
			setOnClickAnim('shadow-md');
			if (onClick) onClick();
		}, 200);
	}

	return (
		<input
			type={type}
			onClick={() => handleClick()}
			value={children}
			className={`h-12 p-2 border-2 border-themePrimary rounded-2xl mt-4 mb-4 cursor-pointer w-full ${variantStyles} ${onClickAnim} hover:scale-105 transition-transform duration-200`}
		/>
	);
}
