interface Props {
	onClick: () => void;
	children: string;
}

export default function ({ onClick, children }: Props) {
	return (
		<input
			type='button'
			onClick={onClick}
			value={children}
			className='h-12 p-2 border-2 border-slate-700 rounded-2xl mt-2 mb-2 cursor-pointer w-full'
		/>
	);
}
