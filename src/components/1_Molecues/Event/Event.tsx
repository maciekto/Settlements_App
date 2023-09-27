interface Props {
	event: SettlementEvent;
}

export default function Event({ event }: Props): JSX.Element {
	return (
		<div
			key='bang'
			className='border-2 border-slate-700 p-4 rounded-2xl mt-2 mb-2'>
			{event.name}
			<br />
			{event.owner}
			<br />
			{event.date}
		</div>
	);
}
