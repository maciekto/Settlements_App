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
	variant?: 'base' | 'danger';
}

const Input = ({ type, placeholder, defaultValue, register, variant = 'base' }: Props) => {
	const [variantStyles, setVariantStyles] = useState<string | null>(null);
	const variants = {
		base: 'border-themePrimary',
		danger: 'border-themeDanger',
	};

	useEffect(() => {
		setVariantStyles(variants[variant]);
	}, [variantStyles, variant]);

	return (
		<input
			{...register}
			defaultValue={defaultValue}
			type={type}
			placeholder={placeholder}
			className={`${variantStyles} h-12 p-2 border-2 rounded-2xl mt-2 mb-2 w-full transition-transform duration-200`}
			// onChange={(e) => onChange(e)}
		/>
	);
};

export default Input;
