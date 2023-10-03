import { createContext } from 'react';

const MyEventContext = createContext<undefined | SettlementEvent[]>(undefined);

export default MyEventContext;
