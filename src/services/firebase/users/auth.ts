import { User } from 'firebase/auth';
import { child, get, ref, remove, set, update } from 'firebase/database';
import { db, dbRef } from '../firebase';
import CreateUserDB from '../../../interfaces/CreateUserDB';
import { useRevalidator } from 'react-router-dom';

// Auth functionality
export async function isUidInDB(uid: string): Promise<boolean> {
	return await get(child(dbRef, `users/${uid}`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				// console.log(snapshot.val());
				console.log('isUidInDB: User exists in DB');
				return true;
			}

			if (!snapshot.exists()) {
				console.warn('isUidInDB: User not found in DB');
				return false;
			}

			console.warn('isUidInDB: Error with retreiving user from database: snapshot does not exist');
			return false;
		})
		.catch((error) => {
			console.warn('isUidInDB Catch' + error);
			return false;
		});
}

export async function isEmailInDB(email: string, newUid: string, userPhotoURL: string): Promise<boolean> {
	return await get(child(dbRef, `users`))
		.then((snapshot) => {
			if(snapshot.exists()) {
				let userIndex = -1;

				const findedUserValues: any = Object.values(snapshot.val()).filter((user: any, index) => {
					if(email === user.email) {
						userIndex = index;
						return true;
					}
					return false;
				})[0]
				const oldUid = Object.keys(snapshot.val())[userIndex]
				
				if(userIndex === -1) {
					return false
				}
				if(oldUid) {
					return true
				}	
			}
			return false;
		}).catch((err) => {
			throw new Error(err)
		})
}

export async function updateEventsInDBfirstSignIn(email: string, newUid: string) {
	return await get(child(dbRef, `users`))
		.then((snapshot) => {
			if(snapshot.exists()) {
				let userIndex = -1;

				const findedUserValues: any = Object.values(snapshot.val()).filter((user: any, index) => {
					if(email === user.email) {
						userIndex = index;
						return true;
					}
					return false;
				})[0]
				const oldUid = Object.keys(snapshot.val())[userIndex]

				const participateOfEvents = findedUserValues.participateOfEvents.filter((element: any) => {
					if(element !== 'Initial') {
						return true;
					}
				});
	
				// Update participateOfEvents with newUid
				// Updating only participateOfEvents cause user could not create event before because it was not signed in
				participateOfEvents.forEach(async (eventId: any) => {
					get(child(dbRef, `events/${eventId}`))
						.then((snapshot: any) => {
							if(snapshot.exists()) {
								const event = snapshot.val()
								const eventUsers = Object.values(event.users)
								const eventPayments = Object.values(event.payments)
								const eventPaymentsKeys = Object.keys(event.payments)
	
	
								const newEvent = {
									...event,
									users: {},
									payments: {}
								}
	
								// Update users array in EVENTS
								eventUsers.forEach((userUid: any) => {
									if(userUid === oldUid) {
										Object.defineProperty(newEvent.users, newUid, {
											value: newUid,
											enumerable: true
										})
									} else {
										Object.defineProperty(newEvent.users, userUid, {
											value: userUid,
											enumerable: true,
										});
									}
								})
								
	
								eventPayments.forEach((payment: any, index) => {
									// New Payment to insert to payments object above
									const newPayment = {
										...payment,
										whopaid: {},
										users: {}
									}
	
									// Modify oldUids to newUids in WhoPaid Object
									if(payment.whopaid.uid === oldUid) {
										Object.defineProperty(newPayment.whopaid, 'uid', {
											value: newUid,
											enumerable: true
										})
									} else {
										Object.defineProperty(newPayment.whopaid, 'uid', {
											value: payment.whopaid.uid,
											enumerable: true
										})
									}
									Object.defineProperty(newPayment.whopaid, 'value', {
										value: payment.whopaid.value,
										enumerable: true
									})
									
	
	
								
									// Users Object
									const paymentUsersValues = Object.values(payment.users);
	
									paymentUsersValues.forEach((paymentUser: any) => {
										const newPaymentUser = {}
	
										if(paymentUser.uid === oldUid) {
											Object.defineProperty(newPaymentUser, 'uid', {
												value: newUid,
												enumerable: true
											})
										} else {
											Object.defineProperty(newPaymentUser, 'uid', {
												value: paymentUser.uid,
												enumerable: true
											})
										}
	
										Object.defineProperty(newPaymentUser, 'id', {
											value: paymentUser.id,
											enumerable: true
										})
	
										Object.defineProperty(newPaymentUser, 'value', {
											value: paymentUser.value,
											enumerable: true
										})
										if(paymentUser.uid === oldUid) {
											Object.defineProperty(newPayment.users, newUid, {
												value: newPaymentUser,
												enumerable: true
											})
										} else {
											Object.defineProperty(newPayment.users, paymentUser.uid, {
												value: newPaymentUser,
												enumerable: true
											})
										}
	
									})
	
									Object.defineProperty(newEvent.payments, `${eventPaymentsKeys[index]}`, {
										value: newPayment,
										enumerable: true
									})
								})
	
								set(ref(db, 'events/' + eventId), newEvent)
									.catch((err) => {
										throw new Error(err)
									})
							}
						})
				});


			}
		})


}

export async function updateUserInDBfirstSignIn(email: string, newUid: string, userPhotoURL: string): Promise<boolean> {
	return await get(child(dbRef, `users`))
		.then((snapshot) => {
			let userIndex = -1;

				const findedUserValues: any = Object.values(snapshot.val()).filter((user: any, index) => {
					if(email === user.email) {
						userIndex = index;
						return true;
					}
					return false;
				})[0]
				const oldUid = Object.keys(snapshot.val())[userIndex]

				// Replace user varibles

				const newParticipateOfEvents = {}
				findedUserValues.participateOfEvents.forEach((eventId: any, index: number) => {
					Object.defineProperty(newParticipateOfEvents, index, {
						value: eventId,
						enumerable: true
					})
				})

				const newUser = {
					uid: newUid,
					displayName: findedUserValues.displayName,
					email: findedUserValues.email,
					photoURL: userPhotoURL,
					participateOfEvents: newParticipateOfEvents
				}
				// End Replace user variables


				createNewUserInDB(newUser).then().catch((err) => {
					throw new Error(err)
				}).finally(() => {
					remove(ref(db, `users/${oldUid}`)).catch((err) => {
						throw new Error(err)
					})
				})

			return true
		})
			
}




export async function createNewUserInDB({ uid, displayName, email, photoURL, participateOfEvents = {} }: any) {
	await set(ref(db, `users/${uid}`), {
		displayName: displayName,
		email: email,
		photoUrl: photoURL,
		participateOfEvents: {
			0: 'Initial',
			...participateOfEvents
		},
		ownerOfEvents: {
			0: 'Initial',
		},
	})
		.then(() => {
			console.log('createNewUserInDB - Data saved successfully');
		})
		.catch((err) => {
			console.log('createNewUserInDB - Error while creating new user: \n\n' + err.message);
		});
}
