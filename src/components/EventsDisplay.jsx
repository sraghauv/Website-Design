// EventsDisplay component for the Events page
import PropTypes from 'prop-types';
import Event from './Event';

const EventsDisplay = ({ events }) => {
  console.log('Events received in EventsDisplay:', events);

  if (!events || events.length === 0) {
    return <p>No events to display.</p>;
  }

  return (
    <div className="events-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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


