import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyEventsContext from '../../../context/MyEventsContext';
import ParticipateEventsContext from '../../../context/ParticipateEventsContext';
import { defaultEvent } from '../../../utilities/defaultEvent';
import { defaultPayment } from '../../../utilities/defaultPayment';
import Loader from '../../../0_Atoms/Loader/Loader';

export default function PaymentDashboard() {
  const navigate = useNavigate()
	const params = useParams();
	const myEvents = useContext(MyEventsContext);
	const participateEvents = useContext(ParticipateEventsContext);

	const [selectedEvent, setSelectedEvent] = useState<SettlementEvent>(defaultEvent);
  const [selectedPayment, setSelectedPayment] = useState<Payment>(defaultPayment);
	const [errorMessage, setErrorMessage] = useState<string | false>(false);
	
	function handleEvents(): void {
		if (params.id === undefined) {
			setErrorMessage('Event not Found');
			return;
		}

		if (myEvents) {
			const myEvent: false | SettlementEvent = findEventWithId(myEvents, params.id);
			if (myEvent) {
				setSelectedEvent(myEvent);
			}
		}

		if (participateEvents) {
			const participateEvent: false | SettlementEvent = findEventWithId(participateEvents, params.id);
			if (participateEvent) {
				setSelectedEvent(participateEvent);
			}
		}
	}
	function findEventWithId(events: SettlementEvent[], id: string): false | SettlementEvent {
		if (id === undefined) return false;

		const event: SettlementEvent = events.filter((el: SettlementEvent) => (el.id === id ? el : null))[0];
		if (event === undefined) return false;

		return event;
	}

  function handlePayment() {
    selectedEvent.payments.forEach((payment) => {
      if(payment.id === params.paymentId) {
        setSelectedPayment(payment)
      }
    })
  }

  

	useEffect(() => {
		handleEvents();
    if(selectedEvent) {
      handlePayment();
    }
	}, [myEvents, participateEvents, selectedEvent, selectedPayment])

  if(selectedPayment.id == defaultPayment.id) { return <Loader size={'big'} /> }
  if(selectedPayment != defaultPayment) { 
    return <div className='h-full'>
      	<div className='flex justify-between items-center mb-6'>
					<span className='font-bold text-xl'>{selectedPayment.name}</span>
					{/* <UserAvatar
						myUser={myUser}
						size='medium'
					/> */}
				</div>

				<div className='flex gap-2'>
					{/* {usersInEvent.map((user) => {
						return (
							<UserAvatar
								myUser={user}
								size='medium'
							/>
						);
					})} */}
				</div>
    </div>
  }
  return <div>Error has occured</div>
  
}
