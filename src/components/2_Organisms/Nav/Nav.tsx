import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo_nav from '../../../assets/logo_nav.svg';
import AsideMenu from '../AsideMenu/AsideMenu';
import MenuIcon from '../../0_Atoms/MenuIcon/MenuIcon';

export default function Nav() {
	// Burger menu logic
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	function handleMenu(): void {
		setIsMenuVisible(!isMenuVisible);
	}

	return (
		<nav className='flex justify-between items-center bg-themePrimary text-themeWhite relative pl-6 pr-6 pt-4 pb-4 h-16 shadow-md rounded-2xl mt-4'>
			<Link to='/'>
				<img
					src={logo_nav}
					alt=''
					className='h-4'
				/>
			</Link>
			<MenuIcon handleMenu={handleMenu} />
			<AsideMenu isMenuVisible={isMenuVisible} />
		</nav>
	);
}
