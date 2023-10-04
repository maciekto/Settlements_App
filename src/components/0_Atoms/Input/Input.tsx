import React from 'react';

// type
// placeholder
// onChange
// className

interface Props {
	// onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: string;
	placeholder: string;
	defaultValue: string;
	register: Object | null;
}

export default function Input({ type, placeholder, defaultValue, register }: Props) {
	return (
		<input
			{...register}
			defaultValue={defaultValue}
			type={type}
			placeholder={placeholder}
			className='h-12 p-2 border-2 border-slate-700 rounded-2xl mt-2 mb-2 w-full'
			// onChange={(e) => onChange(e)}
		/>
	);
}
