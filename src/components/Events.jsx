/* Events page */
import { useState, useEffect } from 'react';
import eventsData from './Events/eventsData';
import { EventsDisplay, Filter } from './Events/events';

console.log(`Loaded eventsData:`, eventsData);

import SponsorWidget from './SponsorWidget';

const Events = () => {
    const [filter, setFilter] = useState('all');
    const [filteredEvents, setFilteredEvents] = useState(eventsData);

    useEffect(() => {
        const now = new Date();

        console.log(`Current filter:`, filter);

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
                return eventsData.filter((event) => event.type === 'Guest Speaker Talks');
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
        <>
        {/* Displays main content of Events page: the events! */}
        <div style={{backgroundColor: `#BF5801`}} className="events-page min-h-screen flex flex-col items-center pt-20 pb-4">
            <h1 style={{color: `#FFF8D6`}} className="text-4xl font-bold text-center pt-3">See Events From Longhorn Neurotech!</h1>
            <div className="flex flex-row items-center justify-between w-[90%] mt-4 mb-2">
                <h2 style={{color: `#FFF8D6`}} className="text-3xl font-bold">Events</h2>
                <Filter setFilter={setFilter} />
            </div>
            <EventsDisplay events={filteredEvents} />
        </div>

        {/* Events page footer shows all LHNT sponsors! */}
        <SponsorWidget /> 
        </>
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
