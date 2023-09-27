import { useNavigate } from 'react-router-dom';
import Button from '../../0_Atoms/Button.tsx/Button';
import Event from '../../1_Molecues/Event/Event';

interface Props {
	title: string;
	events: SettlementEvent[] | false;
	buttonAddEvent: boolean;
}

export default function EventList({ title, events, buttonAddEvent }: Props): JSX.Element {
	const renderEvents = () => {
		if (events === false) {
			return <div>loading</div>;
		}

		if (events) {
			// Todo: make indexes
			return events.map((event: SettlementEvent): JSX.Element => {
				return <Event event={event} />;
			});
		}
	};

	const navigate = useNavigate();
	function createEvent(): void {
		navigate('/events/create');
	}

	return (
		<div>
			<p>{title}</p>
			{buttonAddEvent ? (
				<Button
					onClick={createEvent}
					type='CTA'>
					Add Event
				</Button>
			) : null}
			{renderEvents()}
		</div>
	);
}
