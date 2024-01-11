function generateNewDate() {
	return new Date();
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function generateUniqueId() {
	let uniqueId = 'id';
	const date = new Date();
	uniqueId += date.getFullYear();
	uniqueId += date.getMonth() + 1;
	uniqueId += date.getDate();
	uniqueId += date.getMinutes();
	uniqueId += date.getSeconds();
	uniqueId += date.getMilliseconds();
	uniqueId += getRandomInt(10000)
	return uniqueId
}
const date = generateNewDate();



export const year = date.getFullYear();

export let month = `${date.getMonth() + 1}`;
if (Number(month) < 10) {
	month = `0${month}`;
}

export let day = `${date.getDate()}`;
if (Number(day) < 10) {
	day = `0${day}`;
}
