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
        name: "Sample Event 1",
        date: new Date("2024-04-15"),
        location: "",
        details: `First social event happening on ${this.date}`,
        type: `Social Event`,
        image: "",
    },

    {
        id: 2,
        name: "Sample Event 2",
        date: new Date("2024-04-20"),
        location: "",
        details: `First general meeting event happening!`,
        type: `General Meeting`,
        image: "",
    },

    {
        id: 3,
        name: "Sample Event 3",
        date: new Date("2024-04-26"),
        location: "",
        details: `Second social event happening!`,
        type: `Social Event`,
        image: "", 
    },

    {
        id: 4,
        name: "Sample Event 4",
        date: new Date("2024-05-01"),
        location: "",
        details: `First guest speaker talk of the semester!`,
        type: `Guest Speaker Talks`,
        image: "",
    },

    {
        id: 5,
        name: "Sample Event 5",
        date: new Date("2024-05-02"),
        location: "", 
        details: `First project meeting happening!`,
        type: `Project Meeting`,
        image: "",
    },

    {
        id: 6,
        name: "Sample Event 6",
        date: new Date("2024-05-10"),
        location: "", 
        details: `Second guest speaker talk of the semester!`,
        type: `Guest Speaker Talks`,
        image: "",
    }

];

export default eventsData;