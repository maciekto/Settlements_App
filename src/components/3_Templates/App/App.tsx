import { Outlet } from 'react-router-dom';
import Nav from '../../2_Organisms/Nav/Nav';
import Footer from '../../2_Organisms/Footer/Footer';
import DBProvider from '../DBProvider/DBProvider';

export default function App() {
	return (
		<main className='text-themePrimary max-w-full w-full grid h-screenIOs grid-rows-AppTemplate pl-4 pr-4'>
			<DBProvider>
				<Nav />
				<main className='mt-2 pt-4 mb-2 pb-4 w-full overflow-y-scroll'>
					<Outlet />
				</main>
			</DBProvider>
			<Footer />
		</main>
	);
}
