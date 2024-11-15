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
        details: `Synapse is hosting Dr. Jose del R Millan in this general meeting! He’ll be giving a talk on his journey and his work in the exciting field of Brain Computing Interface from 6-7PM at the scheduled date and location! All are welcome, no RSVP or anything. Our very own Tony Chae will also host their Journal Club presentation in this general meeting too!`,
        type: `General Meeting`,
        image: "/src/assets/events/General Meeting with Dr. Jose Del R. Milan.png",
    },

    {
        id: 2,
        name: "Longhorn Neurotech x Sypnase Future of Neural Engineering Forum",
        date: new Date("2024-11-18"),
        location: "Welch Hall 2.224, University of Texas at Austin",
        details: `This forum will feature seven interdisciplinary panels led by esteemed professors 
            from neuroscience, computer science, philosophy, physics, arts, and medical fields! There will
            be thought-provoking discussions on Brain hacking & Ethics, Direct brain-to-brain communication, 
            False memory implantation, and Brain Organoids and Human-AI co-evolution. Please make a registration at
            this link https://form.jotform.com/243048038506151 and join us at 7:00 PM - 9:00 PM at the scheduled date!`,
        type: `Guest Speaker Talks`,
        image: "/src/assets/events/Longhorn Neurotech + Synapse Guest Speaker Panel.png",
    }

];

export default eventsData;