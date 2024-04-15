import { useNavigate } from "react-router-dom";
import home_icon from '../../../assets/home_icon.png'
export default function Footer() {
	const navigate = useNavigate()
	return <div className='flex gap-2 text-themeWhite items-center h-16  mb-4'>
		
		<div className="bg-themePrimary shadow-md text-sm rounded-2xl h-16 w-full flex items-center justify-center p-2">
		® Maciej Tomaszewski 2023
		</div>
		<div className="bg-themePrimary shadow-md rounded-2xl h-16 w-24 flex items-center justify-center cursor-pointer" onClick={() => navigate('/')}>
			<img src={home_icon} className='w-5/12'/>
		</div>
	</div>;
}
