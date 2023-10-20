import React from 'react';
import Button from '../../../0_Atoms/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';

export default function EventPayments() {
	const navigate = useNavigate()
	const params = useParams();

	return <div className='h-auto'>
		<Button variant={'cta'} onClick={() => navigate(`/event/${params.id}/payment/create`)}>
			Add Payment
		</Button>
		Payments list
	</div>;
}
