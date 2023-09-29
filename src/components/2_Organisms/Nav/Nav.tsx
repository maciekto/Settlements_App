import { Link } from 'react-router-dom';
import { useState } from 'react';

import AsideMenu from '../AsideMenu/AsideMenu';
import MenuIcon from '../../0_Atoms/MenuIcon/MenuIcon';

export default function Nav() {
	// Burger menu logic
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	function handleMenu(): void {
		setIsMenuVisible(!isMenuVisible);
	}

	return (
		<nav className='flex justify-between bg-slate-700 text-white relative p-6 rounded-b-2xl'>
			<Link to='/'>Settlements</Link>
			<MenuIcon handleMenu={handleMenu} />
			<AsideMenu isMenuVisible={isMenuVisible} />
		</nav>
	);
}
