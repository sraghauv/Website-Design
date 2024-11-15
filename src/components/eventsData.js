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
        location: "UT Austin Main Lawn",
        details: `First social event happening!`,
        type: `Social Event`,
        image: "",
    },

    {
        id: 2,
        name: "Sample Event 2",
        date: new Date("2024-04-20"),
        location: "BME 3.102",
        details: `First general meeting event happening!`,
        type: `General Meeting`,
        image: "",
    },

    {
        id: 3,
        name: "Sample Event 3",
        date: new Date("2024-04-26"),
        location: "UT Austin Main Lawn",
        details: `Second social event happening!`,
        type: `Social Event`,
        image: "", 
    },

    {
        id: 4,
        name: "Sample Event 4",
        date: new Date("2024-05-01"),
        location: "FAC 21",
        details: `First guest speaker talk of the semester!`,
        type: `Guest Speaker Talk`,
        image: "",
    },

    {
        id: 5,
        name: "Sample Event 5",
        date: new Date("2024-05-02"),
        location: "Texas Inventionworks HQ at EER 1.602", 
        details: `First project meeting happening!`,
        type: `Project Meeting`,
        image: "",
    },

    {
        id: 6,
        name: "Sample Event 6",
        date: new Date("2024-05-10"),
        location: "BUR 320", 
        details: `Second guest speaker talk of the semester!`,
        type: `Guest Speaker Talk`,
        image: "",
    }

];

export default eventsData;