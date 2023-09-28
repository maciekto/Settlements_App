import { createContext } from 'react';

const ParticipateEventsContext = createContext<false | SettlementEvent[]>(false);

export default ParticipateEventsContext;
