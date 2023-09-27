import { Outlet } from "react-router-dom";
import Nav from "../../2_Organisms/Nav/Nav";

export default function App() {
	return (
		<main className='p-6 text-gray-700 w-96'>
			<Nav />
			<main className='mt-6'>
				<Outlet />
			</main>
		</main>
	);
}
