import React, { useContext, useEffect, useState } from 'react'
import { selectedEventContext } from '../EventDashboard/EventDashboard'
import { update } from 'firebase/database';

type needsToPayObject = {
  uid: string;
  value: number;
  payTo: string;
  paymentsIds: string[];
}

export default function EventSummary() {

  const selectedEvent = useContext(selectedEventContext)

  const [needsToPay, setNeedsToPay] = useState<needsToPayObject[]>([])

  function initial() {
    selectedEvent?.payments.map((payment) => {

      // Convert users from objects to Array
      const usersArray = Object.values(payment.users)
      usersArray.forEach((userWhoNeedsToPay) => {

        // Setstate logic
        setNeedsToPay((prevValue) => {

          // Check if payment is already written (need to do because react render 2 times in development)
          const checkIfTheSameExists = prevValue.filter((el) => el.paymentsIds.includes(userWhoNeedsToPay.id));
          
          // If checkIfTheSameExists found something length is greater than 0 so, no need to do any operations, return previous Value
          if(checkIfTheSameExists.length > 0) {
            return [...prevValue]
          } 
          
          // If is 0 continue
          else {

            // Check if user in existing array has the same connection to the new user and if yes update value of that relation
            // Need to do because without that there would be multiple payments from user1 to user2 for example. 
            // We want that to be in one relation.
            const updated = prevValue.map((el) => {

              // Check if it's the same
              if(el.uid == userWhoNeedsToPay.uid && el.payTo == payment.whopaid.uid) {
                return {
                  uid: el.uid,
                  value: Number(el.value) + Number(userWhoNeedsToPay.value),
                  payTo: el.payTo,
                  // Update the paymentsIds for making sure that every payment has been included and not doubled
                  paymentsIds: [...el.paymentsIds, userWhoNeedsToPay.id]
                }
              } 
              
              // If user is not the same return element (do not change anything)
              else {
                return el
              }
            })
            
            // Now we need to check if updated array is different than prevValue
            let isTheSame = true;
            for(let i=0; i < prevValue.length; i++) {
              if(prevValue[i].value !== updated[i].value) {
                isTheSame = false
              }
            }

            // If is true create new payment in array
            if(isTheSame) {
              return [...prevValue, {
                uid: userWhoNeedsToPay.uid,
                value: Number(userWhoNeedsToPay.value),
                payTo: payment.whopaid.uid,
                paymentsIds: [userWhoNeedsToPay.id],
              }]
            } 
            
            // If is false return updated array
            else {
              return [...updated]
            } 
          }
        })
      })
    })
  }

  function loadSummary() {
    needsToPay.forEach((el1) => {
      needsToPay.forEach((el2) => {
        if(el1.uid === el2.payTo && el1.payTo === el2.uid) {
          
          const operation = Number(el1.value) - Number(el2.value)
          if(operation > 0) {
            console.log('Para znaleziona')
            console.log(el1.payTo)
            console.log(`${el1.uid} musi zapłacic ${operation} do ${el1.payTo}`)
          }
    
        } 
      })
    })
  }

  

  useEffect(() => {
    
    // console.log(needsToPay)
    initial()
  }, [selectedEvent])



  return (
    <>
    <div>EventSummary</div>
      {needsToPay.map((el: needsToPayObject) => {
        return <div className='pt-2'>
          {el.uid} musi zapłacić {`${el.value}`} do {el.payTo}
        </div>
      })}
      <input type='button' value={'Summary'} onClick={loadSummary}/>
    </>
  )
}
