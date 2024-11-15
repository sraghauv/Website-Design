// EventsDisplay component for the Events page
import PropTypes from 'prop-types';
import Event from './Event';

/*
    Displays all the events and will adjust what 
    events are shown based on what the user chose 
    from one of the selection in the Filter button!
*/
const EventsDisplay = ({ events }) => {
  console.log('Events received in EventsDisplay:', events);

  if (!events || events.length === 0) {
    return <p style={{color: '#FFF8D6'}} className="flex flex-wrap text-3xl font-bold p-4 w-[90%] text-center">We couldn’t find any events matching for your search. Don’t worry — new events are added regularly, so check again soon!</p>   
  }

  return (
    <div className="events-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-[90%]">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

EventsDisplay.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      location: PropTypes.string,
      details: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default EventsDisplay;


