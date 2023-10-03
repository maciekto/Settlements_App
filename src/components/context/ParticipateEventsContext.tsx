import { createContext } from 'react';

const ParticipateEventsContext = createContext<undefined | SettlementEvent[]>(undefined);

export default ParticipateEventsContext;
