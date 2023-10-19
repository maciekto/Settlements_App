interface Props {
	children: JSX.Element[];
}

export default function PillsSection({ children }: Props) {
	return <div className='w-full max-w-sm mt-4 mb-4 flex gap-2 overflow-x-auto p-2'>
	
		{...children}
			</div>;
}
