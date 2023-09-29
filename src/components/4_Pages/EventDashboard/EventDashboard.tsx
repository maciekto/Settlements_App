// TODO: Make logic for authentication (do not show event to user if he is not a member or the owner)
// ^ Need to get events from database only for the owner or the member (not downloading all the events and then filter)

// TODO: Get users information from database: displayName, photoUrl need to write getUser function in users.ts services. Map users and get each user inside loop

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '../../../services/firebase/firebase';
import { getEvents } from '../../../services/firebase/events';
import Loader from '../../0_Atoms/Loader/Loader';

export default function EventDashboard() {
	const params = useParams();

	const [selectedEvent, setSelectedEvent] = useState<false | SettlementEvent>(false);

	// const myEvents: false | SettlementEvent[] = useContext(MyEventContext);
	async function handleEvents(uid: string): Promise<void> {
		const myEvents: SettlementEvent[] | false = await getEvents(uid, 'myEvents');
		const participateEvents: SettlementEvent[] | false = await getEvents(uid, 'participateEvents');

		const myEvent: false | SettlementEvent = findEventWithId(myEvents, params.id);
		const participateEvent: false | SettlementEvent = findEventWithId(participateEvents, params.id);

		if (myEvent !== false) {
			setSelectedEvent(myEvent);
		}

		if (participateEvent !== false) {
			setSelectedEvent(participateEvent);
		}
	}

	function findEventWithId(events: false | SettlementEvent[], id: string | undefined): false | SettlementEvent {
		if (events !== false && id !== undefined) {
			const event: SettlementEvent = events.filter((el: SettlementEvent) => (el.id === id ? el : null))[0];
			if (event === undefined) {
				return false;
			}
			return event;
		}

		return false;
	}

	useEffect(() => {
		if (auth.currentUser != null) {
			handleEvents(auth.currentUser.uid);
		}
	}, []);

	if (selectedEvent === false) {
		return <Loader size='big' />;
	}

	if (selectedEvent) {
		return (
			<div className='border-2 border-slate-700 p-6 rounded-2xl'>
				<p>Event ID {selectedEvent.id}</p>
				<p>Event Name {selectedEvent.name}</p>
				<p>Owner {selectedEvent.owner}</p>
				<div>
					Users
					<br />
					{selectedEvent.users.map((user) => user)}
				</div>
			</div>
		);
	}

	return <div>Error occured</div>;
}
