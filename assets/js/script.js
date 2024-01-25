async function getAllEvents() {
    try {
        const response = await fetch('http://localhost:3000/api/events');
        if (response.ok) {
            let events = await response.json();
            console.log(events);

            let availabilities = {};
      

           
            console.log(availabilities);
            return events;
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


// let availabilities = {
//     'michou':[
//         {
//             date: '11/11/2011',
//             available: false
//         },
//         {
//             date: '11/11/2011',
//             available: false
//         },
//         {
//             date: '11/11/2011',
//             available: false
//         }
//     ],
//     'Jonnhy':[
//         {
//             date: '11/11/2011',
//             available: false
//         },
//         {
//             date: '11/11/2011',
//             available: false
//         },
//         {
//             date: '11/11/2011',
//             available: false
//         }
//     ],
// }

// async function getAllEvents() {
//     try {
//         const response = await fetch('http://localhost:3000/api/events');
//         if (response.ok) {
//             const events = await response.json();

//             let availabilities = {};
//             events.forEach((event) => {
//                 const author = event.author;
//                 availabilities[author] = [];
//             console.log(availabities);
//              });

//         } else {
//             console.error('Error fetching events:', response.statusText);
//             return [];
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// }



// event.dates.forEach((date) => {
//     const th = document.createElement('th');
//     th.textContent = date.date;
//     dateColumn.appendChild(th);
// });


                    // // Parcours des dates de l'événement
                    // dates.forEach(dateObj => {
                    //     const date = dateObj.date;
                    //     const attendees = dateObj.attendees;

                    //     // Vérification s'il y a des participants à la date
                    //     if (attendees && attendees.length > 0) {
                    //         // Parcours des participants
                    //         attendees.forEach(attendee => {
                    //             const attendeeName = attendee.name;
                    //             const availability = {
                    //                 date: date,
                    //                 available: attendee.available || false // par défaut, si la propriété available n'est pas définie
                    //             };

                    //             // Ajout de la disponibilité à l'auteur correspondant
                    //             if (!availabilities[attendeeName]) {
                    //                 availabilities[attendeeName] = [];
                    //             }

                    //             availabilities[attendeeName].push(availability);
                  

// async function generateEventCard() {
//     try {
//         const events = await getAllEvents();
//         const eventsContainer = document.getElementById('container-cards');

//         events.forEach((event) => {

//             if (typeof event !== 'object') {
//                 console.error('Invalid event object:', event);
//                 return;
//             }

//             const card = document.createElement('div');
//             card.classList.add('card');

//             const header = document.createElement('div');
//             header.classList.add('card__header');

//             const title = document.createElement('h2');
//             title.classList.add('card__header__title');
//             title.textContent = event.name || '';

//             const author = document.createElement('h3');
//             author.classList.add('card__header__author');
//             author.textContent = `par ${event.author || ''}`;

//             const description = document.createElement('h3');
//             description.classList.add('card__header__descp');
//             description.textContent = event.description || '';

//             header.appendChild(title);
//             header.appendChild(author);
//             header.appendChild(description);

//             // tableau
//             const table = document.createElement('table');
//             table.classList.add('card__table');

//             // colonnes
//             const thead = document.createElement('thead');
//             const dateColumn = document.createElement('tr');

//             const emptyHeader = document.createElement('th');
//             dateColumn.appendChild(emptyHeader);

//             event.dates.forEach((date) => {
//                 const th = document.createElement('th');
//                 th.textContent = date.date;
//                 dateColumn.appendChild(th);
//             });
//             thead.appendChild(dateColumn);
//             table.appendChild(thead);

//             //rows
      
//             // ajout tableau complet
//             card.appendChild(header);
//             card.appendChild(table);

//             eventsContainer.appendChild(card);
//         });
//     } catch (error) {
//         console.error('Error generating event cards:', error);
//     }
// }
// generateEventCard();


// // let example_attendees = [
// //     {
// //         name: 'Michou',
// //         availability: [{
// //             date: '11/11/2011',
// //             available: false
// //         },
// //         {
// //             date: '11/11/2011',
// //             available: false
// //         },
// //         {
// //             date: '11/11/2011',
// //             available: false
// //         }]
// //     },
// //     {
// //         name: 'Jhonny',
// //         availability: [true, null, false]
// //     },
// // ]