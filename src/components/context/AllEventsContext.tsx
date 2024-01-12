import { createContext } from 'react';
import { defaultEvent } from '../utilities/defaultEvent';

const AllEventsContext = createContext<SettlementEvent[]>([defaultEvent]);

export default AllEventsContext;
