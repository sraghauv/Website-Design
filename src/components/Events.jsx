/* Events page */
import { useState, useEffect } from 'react';
import Filter from './Filter';
import EventsDisplay from './EventsDisplay';
import eventsData from './eventsData';
import SponsorWidget from './SponsorWidget';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    const now = new Date();
    const filtered = (() => {
      switch (filter) {
        case 'past':
          return eventsData.filter((event) => new Date(event.date) < now);
        case 'upcoming':
          return eventsData.filter((event) => new Date(event.date) >= now);
        case 'project':
          return eventsData.filter((event) => event.type === 'Project Meeting');
        case 'general':
          return eventsData.filter((event) => event.type === 'General Meeting');
        case 'guest':
          return eventsData.filter((event) => event.type === 'Guest Speaker Talk');
        case 'social':
          return eventsData.filter((event) => event.type === 'Social Event');
        default:
          return eventsData;
      }
    })();

    console.log(`Filtered events:`, filtered);

    setFilteredEvents(filtered);
  }, [filter]);

  return (
    <div>
      <div className="events-page min-h-screen bg-gray-100 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600">Longhorn Neurotech Events</h1>
        <Filter setFilter={setFilter} />
        <EventsDisplay events={filteredEvents} />
      </div>
      <SponsorWidget /> {/* Events page footer shows all LHNT sponsors! */}
    </div>
  );
};

export default Events;




// import SponsorsWidget from "./SponsorWidget";

// const Events = () => {
//   return (
//     <div>
//       <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold text-blue-600">Events Page</h1>
//       </div>
//       <SponsorsWidget />
//     </div>
//   );
// };

// export default Events;

// import { useState, useEffect } from 'react';
// import Filter from './Filter';
// import EventsDisplay from './EventsDisplay';
// import eventsData from './eventsData';

// const Events = () => {
//   const [filter, setFilter] = useState('all');
//   const [filteredEvents, setFilteredEvents] = useState(eventsData);

//   useEffect(() => {
//     const now = new Date();
//     let filtered = eventsData;

//     switch (filter) {
//       case 'past':
//         filtered = eventsData.filter((event) => new Date(event.date) < now);
//         break;
//       case 'upcoming':
//         filtered = eventsData.filter((event) => new Date(event.date) >= now);
//         break;
//       case 'project':
//         filtered = eventsData.filter((event) => event.type === 'Project Meeting');
//         break;
//       case 'general':
//         filtered = eventsData.filter((event) => event.type === 'General Meeting');
//         break;
//       case 'guest':
//         filtered = eventsData.filter((event) => event.type === 'Guest Speaker Talk');
//         break;
//       case 'social':
//         filtered = eventsData.filter((event) => event.type === 'Social Event');
//         break;
//       default:
//         filtered = eventsData; // All events
//     }

//     setFilteredEvents(filtered);
//   }, [filter]);

//   return (
//     <div className="events-page">
//       <h1>Longhorn Neurotech Events</h1>
//       <Filter setFilter={setFilter} />
//       <EventsDisplay events={filteredEvents} />
//     </div>
//   );
// };

// export default Events;
