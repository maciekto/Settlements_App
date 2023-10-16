interface SettlementEvent {
	id: string;
	name: string;
	owner: string;
	date: string;
	users: string[];
}

const defaultEvent = {
	id: 'defaultID',
	name: 'defaultName',
	owner: 'defaultUID',
	date: '25-01-2034',
	users: ['defaultUID'],
};
