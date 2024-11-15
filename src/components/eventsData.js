/*  
    eventsData.js 

    The place to manually add, remove, or change
    any information about any Event for LHNT

    Just include each event as an object inside the 
    array [] like this:
    { 
        id: ,
        name: "Name of event",
        date: new Date("Date of event"),
        location: "Where event is happening",
        details: `Details about the event, including location 
            like {this.location} and date of event like
            {this.date}`,
        type: `Specify type of event`
        image: "Place URL of event images here",
    }, 

    The event's type is associated with the type of event it is:
        * Project Meeting       (project members meetings)
        * General Meeting       (general meetings available for all)
        * Guest Speaker Talks   (guest speaker meetings)
        * Social Event          (social hangouts with members of LHNT)
    
*/

const eventsData = [

    {
        id: 1,
        name: "General Meeting Featuring Dr. Jose Del R. Milan",
        date: new Date("2024-10-21"),
        location: "Burdine Hall 108",
        details: `Synapse will be hosting Dr. Jose del R Millan tomorrow! He’ll be giving a talk from 6-7PM in BUR 108 on his journey and his work in the exciting field of Brain Computing Interface! All are welcome, no RSVP or anything. Our very own Tony Chae will also host our Journal Club presentation.`,
        type: `General Meeting`,
        image: "/src/assets/events/General Meeting with Dr. Jose Del R. Milan.png",
    }

];

export default eventsData;