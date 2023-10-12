interface Props {
	children: string;
	onClick?: () => void;
}

export default function Pill({ children, onClick }: Props) {
	return (
		<div
			onClick={onClick}
			className='p-1 pl-4 pr-4 max-w-min border-2 border-themePrimary text-center whitespace-nowrap rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer'>
			{children}
		</div>
	);
}
