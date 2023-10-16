import { createContext } from 'react';
import { defaultEvent } from '../utilities/defaultEvent';

const MyEventContext = createContext<SettlementEvent[]>([defaultEvent]);

export default MyEventContext;
