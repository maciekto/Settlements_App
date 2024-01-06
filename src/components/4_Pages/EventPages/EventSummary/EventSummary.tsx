import React, { useContext, useEffect, useState } from 'react'
import { selectedEventContext } from '../EventDashboard/EventDashboard'
import { update } from 'firebase/database';

type needsToPayObject = {
  id: string;
  uid: string;
  value: Number;
  payTo: string;
}

export default function EventSummary() {

  const selectedEvent = useContext(selectedEventContext)

  const [needsToPay, setNeedsToPay] = useState<needsToPayObject[]>([])

  function initial() {
    selectedEvent?.payments.map((payment) => {
      // console.log(payment)

      const usersArray = Object.values(payment.users)
      usersArray.forEach((userWhoNeedsToPay) => {

        setNeedsToPay((prevValue) => {
          const checkIfTheSameExists = prevValue.filter((el) => el.id == userWhoNeedsToPay.id);
          if(checkIfTheSameExists.length > 0) {
            return [...prevValue]
          } else {
            const updated = prevValue.map((el) => {
            //TODO: FIX FOR DEPLOYMENT EXETUTES TWO TIMES
              if(el.uid == userWhoNeedsToPay.uid && el.payTo == payment.whopaid.uid) {
                console.log('update')
                console.log(el.uid, el.payTo, el.value)
                return {
                  id: el.id,
                  uid: el.uid,
                  value: Number(el.value) + Number(userWhoNeedsToPay.value),
                  payTo: el.payTo
                }
              } else {
                return el
              }
            })
            
            let isTheSame = true;
            for(let i=0; i < prevValue.length; i++) {
              if(prevValue[i].value !== updated[i].value) {
                isTheSame = false
              }
            }
            // isTheSame = true
            if(isTheSame) {
              return [...prevValue, {
                id: userWhoNeedsToPay.id,
                uid: userWhoNeedsToPay.uid,
                value: Number(userWhoNeedsToPay.value),
                payTo: payment.whopaid.uid
              }]
            } else {
              return [...updated]
            } 
          }
        })
      })
    })
  }

  function loadSummary() {
    // needsToPay.forEach((el1) => {
    //   needsToPay.forEach((el2) => {
    //     if(el1.uid === el2.payTo && el1.payTo === el2.uid) {
          
    //       const operation = Number(el1.value) - Number(el2.value)
    //       if(operation > 0) {
    //         console.log('Para znaleziona')
    //         console.log(el1.payTo)
    //         console.log(`${el1.uid} musi zapłacic ${operation} do ${el1.payTo}`)
    //       }
    
    //     } 
    //   })
    // })
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
