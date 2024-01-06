import React, { useContext, useEffect, useState } from 'react';
import Button from '../../../0_Atoms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import PaymentList from '../../../2_Organisms/PaymentList/PaymentList';
import { defaultEvent } from '../../../utilities/defaultEvent';
import MyEventsContext from '../../../context/MyEventsContext';
import ParticipateEventsContext from '../../../context/ParticipateEventsContext';

export default function EventPayments() {
	const navigate = useNavigate();
	const params = useParams();
	const myEvents = useContext(MyEventsContext);
	const participateEvents = useContext(ParticipateEventsContext);

	const [selectedEvent, setSelectedEvent] = useState<SettlementEvent>(defaultEvent);
	const [errorMessage, setErrorMessage] = useState<string | false>(false);

	function handleEvents(): void {
		if (params.id === undefined) {
			setErrorMessage('Event not Found');
			return;
		}

		if (myEvents) {
			const myEvent: false | SettlementEvent = findEventWithId(myEvents, params.id);
			if (myEvent) {
				setSelectedEvent(myEvent);
			}
		}

		if (participateEvents) {
			const participateEvent: false | SettlementEvent = findEventWithId(participateEvents, params.id);
			if (participateEvent) {
				setSelectedEvent(participateEvent);
			}
		}
	}
	function findEventWithId(events: SettlementEvent[], id: string): false | SettlementEvent {
		if (id === undefined) return false;

		const event: SettlementEvent = events.filter((el: SettlementEvent) => (el.id === id ? el : null))[0];
		if (event === undefined) return false;

		return event;
	}

	useEffect(() => {
		handleEvents();
		console.log(selectedEvent);
	}, [myEvents, participateEvents, selectedEvent]);

	return (
		<div className='h-auto'>
			<Button
				variant={'cta'}
				onClick={() => navigate(`/event/${params.id}/payment/create`)}>
				Add Payment
			</Button>
			<PaymentList currentEvent={selectedEvent} />
			{errorMessage ? errorMessage : null}
		</div>
	);
}
