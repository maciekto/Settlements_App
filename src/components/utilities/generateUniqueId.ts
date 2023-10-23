interface returnedValue {
	uniqueId: string;
	year: number;
	month: string;
	day: string;
}

export function getUniqueId_AndYearMonthDay(): returnedValue {
	let uniqueId = 'id';
	const date = new Date();

	uniqueId += date.getFullYear();
	uniqueId += date.getMonth() + 1;
	uniqueId += date.getDate();
	uniqueId += date.getMinutes();
	uniqueId += date.getSeconds();
	uniqueId += date.getMilliseconds();

	const year = date.getFullYear();

	let month = `${date.getMonth() + 1}`;
	if (Number(month) < 10) {
		month = `0${month}`;
	}

	let day = `${date.getDate()}`;
	if (Number(day) < 10) {
		day = `0${day}`;
	}

	return { uniqueId, year, month, day };
}
