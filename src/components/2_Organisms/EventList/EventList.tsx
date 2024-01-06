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
		console.log()
		if (events === undefined) {
			return <Loader size='small' />;
		}
		console.log(events[0].name)
		if(events[0].name === 'defaultName') {
			return <div>U have zero of {title}</div>
		}
		if (events.length > 0) {
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
		navigate('/event/create');
	}

	return (
		<div className='w-full pb-2'>
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
