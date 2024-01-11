import { useNavigate } from "react-router-dom";

export default function Footer() {
	const navigate = useNavigate()
	return <div className='flex gap-2 text-themeWhite items-center h-16  mb-4'>
		<div className="bg-themePrimary shadow-md rounded-2xl h-16 w-1/4 flex items-center justify-center" onClick={() => navigate('/')}>
			Home
		</div>
		<div className="bg-themePrimary shadow-md rounded-2xl h-16 w-1/4 flex items-center justify-center">
			test
		</div>
		<div className="bg-themePrimary shadow-md rounded-2xl h-16 w-1/4 flex items-center justify-center">
			test
		</div>
		<div className="bg-themePrimary shadow-md rounded-2xl h-16 w-1/4 flex items-center justify-center">
			test
		</div>
	</div>;
}
