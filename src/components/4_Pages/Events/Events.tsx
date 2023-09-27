import { JSXElementConstructor, useEffect, useState } from 'react';
import Button from '../../0_Atoms/Button.tsx/Button';
import { useNavigate } from 'react-router-dom';
import { auth, getEvents } from '../../../firebase';
import Event from '../../1_Molecues/Event/Event';
import EventList from '../../2_Organisms/EventList/EventList';

// TODO: Fix typscipt in firebase.ts to resolve only events array
export default function Events() {
	const [myEvents, setMyEvents] = useState<SettlementEvent[] | false>(false);
	const [participateEvents, setParticipateEvents] = useState<SettlementEvent[] | false>(false);

	async function handleEvents(uid: string) {
		const myEvents: SettlementEvent[] | false = await getEvents(uid, 'myEvents');
		if (myEvents == false) {
			// setMyEvents("You do not have any created events");
		}
		if (myEvents) {
			setMyEvents(myEvents);
		}

		const participateEvents: SettlementEvent[] | false = await getEvents(uid, 'participateEvents');
		if (participateEvents == false) {
			// setParticipateEvents("You do not participate in any events");
		}
		if (participateEvents) {
			setParticipateEvents(participateEvents);
		}
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			handleEvents(auth.currentUser.uid);
		}
	}, []);

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
