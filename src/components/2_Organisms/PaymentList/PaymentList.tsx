import React, { useEffect, useState } from 'react'
import Loader from '../../0_Atoms/Loader/Loader';
import { useParams } from 'react-router-dom';
import { defaultPayment } from '../../utilities/defaultPayment';
import { defaultEvent } from '../../utilities/defaultEvent';
import Payment from '../../1_Molecues/Payment/Payment';

interface Props {
  currentEvent: SettlementEvent
}

export default function PaymentList({ currentEvent }: Props ) {
  console.log(currentEvent)
  console.log(defaultEvent)
  const params = useParams();

  const renderPayments = () => {
		if (currentEvent.id === defaultEvent.id) {
			return <Loader size='small' />;
		}
		if (currentEvent.payments) {
			return currentEvent.payments.map((payment: Payment): JSX.Element => {
        console.log(payment)
				return (
					<Payment eventID={currentEvent.id} payment={payment}/>
				);
			});
		}
	};
  useEffect(() => {
  }, [currentEvent])
  return (
    <div className='w-full'>
			{renderPayments()}
		</div>
  )
}
