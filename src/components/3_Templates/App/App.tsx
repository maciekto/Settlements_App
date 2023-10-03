import { Outlet } from 'react-router-dom';
import Nav from '../../2_Organisms/Nav/Nav';
import Footer from '../../2_Organisms/Footer/Footer';
import EventsProvider from '../EventsProvider/EventsProvider';

export default function App() {
	return (
		<main className='text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate'>
			<Nav />
			<main className='p-6 w-full'>
				<EventsProvider>
					<Outlet />
				</EventsProvider>
			</main>
			<Footer />
		</main>
	);
}
