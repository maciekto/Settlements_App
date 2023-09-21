import React from "react";

// type
// placeholder
// onChange
// className

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: string;
	placeholder: string;
	value: string;
}

export default function Input({ type, placeholder, value, onChange }: Props) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className='h-12 p-2 border-2 border-slate-700 rounded-2xl mt-2 mb-2'
			value={value}
			onChange={(e) => onChange(e)}
		/>
	);
}
