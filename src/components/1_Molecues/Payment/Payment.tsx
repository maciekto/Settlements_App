import { useNavigate } from 'react-router-dom';

interface Props {
	eventID: string;
  payment: Payment;
}

// TODO: Define what event needs to show here and in event page
// ^ For now: date, name

export default function Event({ eventID, payment }: Props): JSX.Element {
	const navigate = useNavigate();

	const handleGoToEventDashboard = () => {
		navigate(`/event/${eventID}/payment/${payment.id}`);
	};

	return (
		<div
			onClick={handleGoToEventDashboard}
			key='bang'
			className='border-2 border-themePrimary p-4 pl-6 pr-6 rounded-2xl mt-2 mb-2 cursor-pointer bg-themeWhite hover:scale-105 transition-transform duration-200'>
			<div className='text-sm text-themePrimary opacity-40'>{payment.date}</div>
			<div className='font-bold text-lg'> {payment.name}</div>
		</div>
	);
}
