import { useNavigate } from 'react-router-dom';

interface Props {
	event: SettlementEvent;
}

// TODO: Define what event needs to show here and in event page
// ^ For now: date, name

export default function Event({ event }: Props): JSX.Element {
	const navigate = useNavigate();

	const handleGoToEventDashboard = () => {
		navigate(`/event/${event.id}`);
	};

	return (
		<div
			onClick={handleGoToEventDashboard}
			key='bang'
			className='border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-105 transition-transform duration-200'>
			<p className='text-sm text-themePrimary opacity-40'>{event.date}</p>
			<p className='font-bold text-lg'> {event.name}</p>
		</div>
	);
}
