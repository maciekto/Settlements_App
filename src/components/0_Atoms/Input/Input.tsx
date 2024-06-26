// type
// placeholder
// onChange
// className

import { useEffect, useState } from 'react';

interface Props {
	// onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: string;
	placeholder: string;
	defaultValue: string;
	register: Object | null;
	variant?: 'base' | 'danger' | 'outline' | 'disabled';
}

const Input = ({ type, placeholder, defaultValue, register, variant = 'base'}: Props) => {
	const [variantStyles, setVariantStyles] = useState<string | null>(null);
	const variants = {
		base: 'border-2 border-themeGray rounded-none',
		outline: 'border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2',
		danger: 'border-themeDanger rounded-2xl h-12 p-2 border-2 mt-2 mb-2',
		disabled: 'border-themePrimary rounded-2xl h-12 p-2 border-2 mt-2 mb-2 bg-themeGray'
	};

	useEffect(() => {
		setVariantStyles(variants[variant]);
	}, [variantStyles, variant]);

	return (
		<input
			{...register}
			defaultValue={defaultValue}
			type={type}
			step={'any'}
			placeholder={placeholder}
			className={`${variantStyles} w-full transition-transform duration-200`}
			disabled={variant === 'disabled' && true}
			// onChange={(e) => onChange(e)}
		/>
	);
};

export default Input;
