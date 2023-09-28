import { Outlet } from 'react-router-dom';
import Nav from '../../2_Organisms/Nav/Nav';
import Footer from '../../2_Organisms/Footer/Footer';
import { useEffect, useState } from 'react';
import MyEventContext from '../../context/MyEventsContext';
import ParticipateEventsContext from '../../context/ParticipateEventsContext';
import { auth } from '../../../services/firebase/firebase';
import { getEvents } from '../../../services/firebase/events';

export default function App() {
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
		<MyEventContext.Provider value={myEvents}>
			<ParticipateEventsContext.Provider value={participateEvents}>
				<main className='text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate'>
					<Nav />
					<main className='p-6 w-full'>
						<Outlet />
					</main>
					<Footer />
				</main>
			</ParticipateEventsContext.Provider>
		</MyEventContext.Provider>
	);
}
