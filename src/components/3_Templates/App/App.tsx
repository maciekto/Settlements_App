import { Outlet } from 'react-router-dom';
import Nav from '../../2_Organisms/Nav/Nav';
import Footer from '../../2_Organisms/Footer/Footer';
import DBProvider from '../DBProvider/DBProvider';

export default function App() {
	return (
		<main className='text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate'>
			<DBProvider>
				<Nav />
				<main className='pt-6 pb-6 w-full'>
					<Outlet />
				</main>
			</DBProvider>
			<Footer />
		</main>
	);
}
