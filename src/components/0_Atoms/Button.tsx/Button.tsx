import { useEffect, useState } from 'react';

interface Props {
	onClick: () => void;
	children: string;
	type: string | null;
}

export default function ({ onClick, children, type }: Props) {
	const [style, setStyle] = useState<string | null>(null);

	// Types

	useEffect(() => {
		if (type === 'CTA') {
			setStyle('bg-slate-700 text-white');
		}
	}, []);

	return (
		<input
			type='button'
			onClick={onClick}
			value={children}
			className={`h-12 p-2 border-2 border-slate-700 rounded-2xl mt-4 mb-4 cursor-pointer w-full ${style} `}
		/>
	);
}
