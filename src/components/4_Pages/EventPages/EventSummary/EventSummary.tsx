import React, { useContext, useEffect, useState } from 'react'
import { selectedEventContext } from '../EventDashboard/EventDashboard'
import { update } from 'firebase/database';
import Button from '../../../0_Atoms/Button/Button';
import getUser from '../../../utilities/getUser';
import AllUsersContext from '../../../context/AllUsersContext';
import UserAvatar from '../../../0_Atoms/UserAvatar/UserAvatar';
import UserPill from '../../../1_Molecues/UserPill/UserPill';

type needsToPayObject = {
  uid: string;
  value: number;
  payTo: string;
  paymentsIds: string[];
}

export default function EventSummary() {

  const allUsers = useContext(AllUsersContext)
  const selectedEvent = useContext(selectedEventContext)
  const [showSummary, setShowSummary] = useState<boolean>(false)
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
    setShowSummary(true)

    needsToPay.forEach((el1) => {
      needsToPay.forEach((el2) => {
        if(el1.uid === el2.payTo && el1.payTo === el2.uid) {
          const operation = Number(el1.value) - Number(el2.value)
          if(operation >= 0) {
            // console.log('Para znaleziona')
            // console.log(el1.payTo)
            // console.log(`${el1.uid} musi zapłacic ${operation} do ${el1.payTo}`)
            const object: needsToPayObject = {
              uid: el1.uid,
              value: operation,
              payTo: el1.payTo,
              paymentsIds: [...el1.paymentsIds, ...el2.paymentsIds]
            }
            // console.log(object)


              const updated = needsToPay.map(element => {
                if((element.payTo == object.payTo || element.payTo == object.uid) && (element.uid == object.uid || element.uid == object.payTo)) {
                  console.log(element)
                  return object;
                } else {
                  console.log(element)
                  return element;
                }
              });

              const duplicateCheck: needsToPayObject[] = []

              updated.forEach((el1, index1) => {
                
                updated.forEach((el2, index2) => {
                  if(index1 == index2) {
                    if(!duplicateCheck.includes(el1)) {
                      duplicateCheck.push(el1)
                    }
                  }

                  else {
                    if(el1.paymentsIds != el2.paymentsIds) {
                      if(!duplicateCheck.includes(el1)) {
                        duplicateCheck.push(el1)
                      }
                    
                    } 
                  }
                })
              })

              const checkIfThereAreZeros = duplicateCheck.filter((el) => {
                if(el.value == 0) {return false}
                else{return true}
              })


              setNeedsToPay(checkIfThereAreZeros)
          }
        }
      })
    })
  }

  useEffect(() => {
    initial()
  }, [selectedEvent])



  return (
    <>
      {showSummary && needsToPay.map((el: needsToPayObject, index) => {
        const user: any = getUser(el.uid, allUsers)
        const userPayTo: any = getUser(el.payTo, allUsers)

        return <div className='border-2 border-themePrimary mb-3 rounded-2xl' key={index}>
          <div className='p-2'>
            Settlement {index + 1}
          </div>
          <div className='w-full h-[2px] bg-themePrimary'></div>
          <div className='p-2 flex flex-wrap items-center gap-2'>
            <UserPill user={user} maxWFit={true} border={false}/> <p className='font-bold text-themeDanger'>{`${el.value}`}</p> to&nbsp; 
            <UserPill user={userPayTo} maxWFit={true} border={false}/>
          </div>
          
        </div>
      })}
      {showSummary ? null : <Button variant={'base'} type='button' onClick={loadSummary}>Show summary</Button>}
      
    </>
  )
}
