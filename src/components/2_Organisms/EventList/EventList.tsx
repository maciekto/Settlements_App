import Event from '../../1_Molecues/Event/Event';

interface Props {
	title: string;
	events: SettlementEvent[] | false;
}

export default function EventList({ title, events }: Props): JSX.Element {
	const renderEvents = () => {
		if (events === false) {
			return <div>loading</div>;
		}

		if (events) {
			// Todo: make indexes
			return events.map((event: SettlementEvent, index: number): JSX.Element => {
				return <Event event={event} />;
			});
		}
	};

	return (
		<div>
			<p>{title}</p>
			{renderEvents()}
		</div>
	);
}
