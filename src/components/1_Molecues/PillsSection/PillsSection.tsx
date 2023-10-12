interface Props {
	children: JSX.Element[];
}

export default function PillsSection({ children }: Props) {
	return <div className='w-full mt-6 mb-6 flex gap-2'>{...children}</div>;
}
