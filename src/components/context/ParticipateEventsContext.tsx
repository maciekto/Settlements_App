import { createContext } from 'react';
import { defaultEvent } from '../utilities/defaultEvent';

const ParticipateEventsContext = createContext<SettlementEvent[]>([defaultEvent]);

export default ParticipateEventsContext;
