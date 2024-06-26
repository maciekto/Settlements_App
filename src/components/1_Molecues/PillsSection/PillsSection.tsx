interface Props {
	children: JSX.Element[];
}

export default function PillsSection({ children }: Props) {
	return (
		<div className='w-full max-w-screen overflow-x-scroll p-2'>
			<div className='w-2 flex gap-2 '>{...children}</div>
		</div>
	);
}
