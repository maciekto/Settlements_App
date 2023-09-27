interface Props {
	event: SettlementEvent;
}

export default function Event({ event }: Props): JSX.Element {
	return (
		<div
			className='border'
			key='bang'>
			{event.name}
			<br />
			{event.owner}
			<br />
			{event.date}
		</div>
	);
}
