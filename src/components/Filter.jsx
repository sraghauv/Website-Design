// Filter component for the Events page
import PropTypes from 'prop-types';

const Filter = ({ setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-section">
      <select onChange={handleFilterChange} className="form-select">
        <option value="all">All Events</option>
        <option value="past">Past Events</option>
        <option value="upcoming">Upcoming Events</option>
        <option value="project">Project Meetings</option>
        <option value="general">General Meetings</option>
        <option value="guest">Guest Speaker Talks</option>
        <option value="social">Social Events</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;