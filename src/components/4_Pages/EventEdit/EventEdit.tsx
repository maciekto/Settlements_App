import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../../2_Organisms/EventForm/EventForm';
import MyEventContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';

export default function EventEdit() {
	const [currentEvent, setCurrentEvent] = useState<SettlementEvent>();
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
		<div className='bg-themeWhite rounded-2xl border-2 border-themePrimary shadow-md p-4 h-full'>
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			{/* <p className='text-lg font-bold pb-2'>Edit Event</p> */}
			<EventForm
				type='edit'
				currentEvent={currentEvent}
			/>
		</div>
	);
}
