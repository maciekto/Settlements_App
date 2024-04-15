import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyEventsContext from '../../../context/MyEventsContext';
import ParticipateEventsContext from '../../../context/ParticipateEventsContext';
import { defaultEvent } from '../../../utilities/defaultEvent';
import { defaultPayment } from '../../../utilities/defaultPayment';
import Loader from '../../../0_Atoms/Loader/Loader';
import UserAvatar from '../../../0_Atoms/UserAvatar/UserAvatar';
import getUser from '../../../utilities/getUser';
import AllUsersContext from '../../../context/AllUsersContext';

export default function PaymentDashboard() {
	const allUsers = useContext(AllUsersContext)
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
      	<div className='flex justify-between items-start mb-6 flex-col w-full gap-2 border-2 border-themePrimary rounded-2xl p-4'>
					<div className='text-themeSecondary'>{selectedPayment.date}</div>
					<div className='font-bold text-xl w-full'>{selectedPayment.name}</div>
					<div className='font-bold'>Amount: {selectedPayment.amount}</div>
					<div className='flex gap-4'>
						<div> <UserAvatar myUser={getUser(selectedPayment.whopaid.uid, allUsers)} /> {`${selectedPayment.whopaid.value}`} </div>
						{Object.values(selectedPayment.users).map(user => {
							return <div><UserAvatar myUser={getUser(user.uid, allUsers)} /> {`${user.value}`}</div>
						})}
					</div>
					
				</div>

				<div className='flex gap-2'>
					
				</div>
    </div>
  }
  return <div>Error has occured</div>
  
}
