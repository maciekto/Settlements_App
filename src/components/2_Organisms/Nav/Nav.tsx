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
		<nav className='flex justify-between items-center bg-slate-700 text-white relative pl-6 pr-6 pt-4 pb-4 h-16'>
			<Link to='/'>Settlements</Link>
			<MenuIcon handleMenu={handleMenu} />
			<AsideMenu isMenuVisible={isMenuVisible} />
		</nav>
	);
}
