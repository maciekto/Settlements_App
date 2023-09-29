import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

interface Props {
	size: 'big' | 'small';
}

export default function Loader({ size }: Props) {
	const [currentSize, setCurrentSize] = useState('text-2xl');

	useEffect(() => {
		if (size === 'small') {
			setCurrentSize('text-2xl');
		}

		if (size === 'big') {
			setCurrentSize('text-6xl');
		}
	}, []);
	return (
		<div className={`${currentSize} w-full grid p-6 place-items-center h-full`}>
			<FontAwesomeIcon
				icon={faSpinner}
				spin
			/>
		</div>
	);
}
