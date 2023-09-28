import { createContext } from 'react';

const MyEventContext = createContext<false | SettlementEvent[]>(false);

export default MyEventContext;
