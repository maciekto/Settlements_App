export default function getEvent(eventId: string, AllEvents: SettlementEvent[]): SettlementEvent {  
  console.log(eventId);
  console.log(AllEvents)
  const findedEvent: SettlementEvent[] = AllEvents.filter((event) => {
    if(event.id === eventId) {
      return true
    } 
    return false;
  })
  console.log(findedEvent[0])
  if(findedEvent.length > 1) throw new Error('There are more events with the same id')
  if(findedEvent.length === 0) throw new Error(`Cannot find event with the id ${eventId}`)
  return findedEvent[0];
}