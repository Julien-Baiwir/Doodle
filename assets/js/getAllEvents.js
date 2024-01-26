export async function getAllEvents() {
    try {
        const response = await fetch('http://localhost:3000/api/events');
        if (response.ok) {
            let events = await response.json();

            let availabilities = [];

            events.forEach(event => {
                // object for the event
                const eventObj = { eventName: event.name, attendees: [] };

                // unique attendee names for each date
                event.dates.forEach(date => {
                    date.attendees.forEach(attendee => {
                        // attendee object
                        let attendeeObj = eventObj.attendees.find(a => a.attendeeName === attendee.name);

                        if (!attendeeObj) {
                            attendeeObj = { attendeeName: attendee.name, dates: [] };
                            eventObj.attendees.push(attendeeObj);
                        }

                        //  date and availability 
                        const dateInfo = { date: date.date, availability: attendee.available };
                        attendeeObj.dates.push(dateInfo);
                    });
                });
                availabilities.push(eventObj);
            });

          
            return { availabilities, events };

        } else {
            console.error('Error fetching events:', response.statusText);
            return { availabilities: [], events };
        }
    } catch (error) {
        console.error('Error:', error);
        return { availabilities: [], events };
    }
}