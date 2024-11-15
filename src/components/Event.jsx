// Event component for the Events page
import PropTypes from 'prop-types';

const Event = ({ event }) => {

  console.log(`Event received in Event component:`, event);

  const { name, date, location, details, type, image } = event;

  // Placeholder image
  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <div className="event-card border p-4 rounded shadow-sm bg-white">
      <img 
        src={image || placeholderImage} 
        alt={`${name} image`} 
        className="event-image w-full h-40 object-cover rounded mb-4" 
      />
      <div>
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
        {location && <p><strong>Location:</strong> {location}</p>} {/* Only display location if provided */}
        <p className="mb-2">{details}</p>
        <span className="event-type badge bg-primary">{type}</span>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string,
    details: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Event;
