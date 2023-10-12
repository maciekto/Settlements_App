import { useNavigate } from 'react-router-dom';
import Button from '../../0_Atoms/Button/Button';
import Event from '../../1_Molecues/Event/Event';
import Loader from '../../0_Atoms/Loader/Loader';

interface Props {
	title: string;
	events: SettlementEvent[] | undefined;
	buttonAddEvent: boolean;
}

export default function EventList({ title, events, buttonAddEvent }: Props): JSX.Element {
	const renderEvents = () => {
		if (events === undefined) {
			return <Loader size='small' />;
		}
		if (events) {
			return events.map((event: SettlementEvent): JSX.Element => {
				return (
					<Event
						key={event.id}
						event={event}
					/>
				);
			});
		}
	};

	const navigate = useNavigate();
	function createEvent(): void {
		navigate('/events/create');
	}

	return (
		<div className='w-full'>
			<p className='font-bold text-xl'>{title}</p>

			{renderEvents()}
			{buttonAddEvent ? (
				<Button
					onClick={createEvent}
					variant='cta'>
					Add Event
				</Button>
			) : null}
		</div>
	);
}
