export let eventId = 'id';

const date = new Date();

eventId += date.getFullYear();
eventId += date.getMonth() + 1;
eventId += date.getDate();
eventId += date.getMinutes();
eventId += date.getSeconds();
eventId += date.getMilliseconds();

export const year = date.getFullYear();

export let month = `${date.getMonth() + 1}`;
if (Number(month) < 10) {
	month = `0${month}`;
}

export let day = `${date.getDate()}`;
if (Number(day) < 10) {
	day = `0${day}`;
}
