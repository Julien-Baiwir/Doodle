// async function getAllEvents() {
//     try {
//         const response = await fetch('http://localhost:3000/api/events');
//         if (response.ok) {
//             let events = await response.json();
            

//             let availabilities = [];

//             events.forEach(event => {
//                 event.dates.forEach(date => {
//                     date.attendees.forEach(attendee => {
//                         let attendeeAvailability = availabilities.find(avail => avail.attendeeName === attendee.name);
//                         if (!attendeeAvailability) {
//                             attendeeAvailability = {
//                                 attendeeName: attendee.name,
//                                 eventAvailabilities: []
//                             };
//                             availabilities.push(attendeeAvailability);
//                         }

//                         let eventAvailability = attendeeAvailability.eventAvailabilities.find(avail => avail.eventName === event.name);
//                         if (!eventAvailability) {
//                             eventAvailability = {
//                                 eventName: event.name,
//                                 dateAvailabilities: []
//                             };
//                             attendeeAvailability.eventAvailabilities.push(eventAvailability);
//                         }

//                         let dateAvailability = {
//                             date: date.date,
//                             availability: attendee.available
//                         };

//                         eventAvailability.dateAvailabilities.push(dateAvailability);
//                     });
//                 });
//             });

//             console.log(availabilities);
//             return availabilities;
           
           
//         } else {
//             console.error('Error fetching events:', response.statusText);
//             return [];
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// }

// async function getAllEvents() {
//     try {
//         const response = await fetch('http://localhost:3000/api/events');
//         if (response.ok) {
//             let events = await response.json();

//             let availabilities = [];

//             events.forEach(event => {
//                 // Create an array for event names and add it to the availabilities array
//                 const eventNameArray = [event.name];
//                 availabilities.push(eventNameArray);

//                 event.dates.forEach(date => {
//                     date.attendees.forEach(attendee => {
//                         let attendeeAvailability = availabilities.find(avail => avail[0] === attendee.name);
//                         if (!attendeeAvailability) {
//                             attendeeAvailability = [attendee.name, []];
//                             availabilities.push(attendeeAvailability);
//                         }

//                         let eventAvailability = attendeeAvailability[1].find(avail => avail[0] === event.name);
//                         if (!eventAvailability) {
//                             eventAvailability = [event.name, []];
//                             attendeeAvailability[1].push(eventAvailability);
//                         }

//                         let dateAvailability = [date.date, attendee.available];
//                         eventAvailability[1].push(dateAvailability);
//                     });
//                 });
//             });

//             console.log(availabilities);
//             return availabilities;

//         } else {
//             console.error('Error fetching events:', response.statusText);
//             return [];
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// }
// getAllEvents();

// async function getAllEvents() {
//     try {
//         const response = await fetch('http://localhost:3000/api/events');
//         if (response.ok) {
//             let events = await response.json();

//             let availabilities = [];

//             events.forEach(event => {
//                 // Create an array for event names
//                 const eventArray = [event.name];
                
//                 // Create an array for attendees inside the event array
//                 const attendeesArray = eventArray.concat(event.dates.flatMap(date => 
//                     date.attendees.flatMap(attendee => attendee.name)
//                 ));
                
//                 // Create an array for dates and availability inside the attendees array
//                 const datesArray = attendeesArray.concat(event.dates.flatMap(date => 
//                     date.attendees.flatMap(attendee => 
//                         [date.date, attendee.available]
//                     )
//                 ));

//                 // Push the arrays to the main availabilities array
//                 availabilities.push(eventArray, attendeesArray, datesArray);
//             });

//             console.log(availabilities);
//             return availabilities;

//         } else {
//             console.error('Error fetching events:', response.statusText);
//             return [];
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// }
// getAllEvents();

async function getAllEvents() {
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

            console.log(availabilities);
            return availabilities;

        } else {
            console.error('Error fetching events:', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
getAllEvents();


async function displayEvents() {
    try {
        const availabilities = await getAllEvents();

        const container = document.getElementById('container-cards');

   
        availabilities.forEach(event => {
 
            const table = document.createElement('table');
            table.classList.add('event-table'); 
            const datesRow = document.createElement('tr');
            datesRow.appendChild(document.createElement('th')); // Empty cell
            event.attendees[0].dates.forEach(dateInfo => {
                const dateCell = document.createElement('th');
                dateCell.textContent = dateInfo.date;
                datesRow.appendChild(dateCell);
            });
            table.appendChild(datesRow);

           
            event.attendees.forEach((attendee, index) => {
              
                const attendeeRow = document.createElement('tr');

                // attendee name  first cell
                const nameCell = document.createElement('td');
                nameCell.textContent = attendee.attendeeName;
                attendeeRow.appendChild(nameCell);

                // availability for each date in subsequent cells
                attendee.dates.forEach(dateInfo => {
                    const availabilityCell = document.createElement('td');
                    availabilityCell.textContent = dateInfo.availability ? 'Available' : 'Not Available';
                    attendeeRow.appendChild(availabilityCell);
                });
                table.appendChild(attendeeRow);
            });


            container.appendChild(table);
        });
    } catch (error) {
        console.error('Error displaying events:', error);
    }
}

displayEvents();




