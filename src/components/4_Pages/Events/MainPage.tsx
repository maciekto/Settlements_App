import { useContext, useEffect, useState } from 'react';

import EventList from '../../2_Organisms/EventList/EventList';
import MyEventsContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import Loader from '../../0_Atoms/Loader/Loader';

export default function MainPage() {
	const myEvents = useContext(MyEventsContext);
	const participateEvents = useContext(ParticipateEventsContext);

	useEffect(() => {}, []);

	return (
		<>
			<EventList
				buttonAddEvent={true}
				title='Your events'
				events={myEvents}
			/>
			<br />
			<EventList
				buttonAddEvent={false}
				title='Events you participate in'
				events={participateEvents}
			/>
		</>
	);
}
