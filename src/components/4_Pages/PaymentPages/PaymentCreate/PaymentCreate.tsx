import React, { useContext, useEffect, useState } from 'react';
import PaymentCreateForm from '../../../2_Organisms/PaymentCreateForm/PaymentCreateForm';
import { defaultEvent } from '../../../utilities/defaultEvent';
import MyEventContext from '../../../context/MyEventsContext';
import ParticipateEventsContext from '../../../context/ParticipateEventsContext';
import { useParams } from 'react-router-dom';

export default function PaymentCreate() {
	const [currentEvent, setCurrentEvent] = useState<SettlementEvent>(defaultEvent);
	const myEvents = useContext(MyEventContext);
	const participateEvents = useContext(ParticipateEventsContext);
	const params = useParams();

	const getCurrentEvent = () => {
		const myEvent = myEvents?.filter((ev) => {
			if (ev.id === params.id) {
				return true;
			}
			return null;
		});

		const participateEvent = participateEvents?.filter((ev) => {
			if (ev.id === params.id) {
				return true;
			}
			return null;
		});
		if (myEvent !== undefined) {
			if (myEvent.length > 0) {
				setCurrentEvent(myEvent[0]);
			}
		}
		if (participateEvent !== undefined) {
			if (participateEvent.length > 0) {
				setCurrentEvent(participateEvent[0]);
			}
		}
	};

	useEffect(() => {
		getCurrentEvent();
	}, [currentEvent, myEvents, participateEvents]);
	return (
		<div>
			<PaymentCreateForm currentEvent={currentEvent} />
		</div>
	);
}
