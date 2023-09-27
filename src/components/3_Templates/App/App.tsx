import { Outlet } from 'react-router-dom';
import Nav from '../../2_Organisms/Nav/Nav';
import Footer from '../../2_Organisms/Footer/Footer';

export default function App() {
	return (
		<main className='text-slate-700 w-96 grid h-screenIOs grid-rows-AppTemplate'>
			<Nav />
			<main className='p-6'>
				<Outlet />
			</main>
			<Footer />
		</main>
	);
}
