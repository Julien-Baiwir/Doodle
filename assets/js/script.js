import { initializeUsername, initializeSwitchUserIcon } from './userName.js';
import { addDateField } from './addDateField.js';
import { getAllEvents } from './getAllEvents.js';
import { addDomEvents } from './addDomEvents.js';
import { btnDelete } from './suppressEvent.js';

initializeUsername();

initializeSwitchUserIcon();

const addDateBtn = document.querySelector('.form-event__btn__plus');
addDateBtn.addEventListener('click', addDateField);

getAllEvents();

const addCards = document.querySelector('.menu__btn__events');
addCards.addEventListener('click', addDomEvents);

const suppressCards = document.querySelector('.menu__btn__suppress');
suppressCards.addEventListener('click', btnDelete );


//////en cours de reconstruction créer et modifier event

// const createEventForm = document.getElementById('create-event');

// createEventForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const authorInput = document.getElementById('event-author');
//     const eventNameInput = document.getElementById('event-name');
//     const descriptionInput = document.getElementById('event-description');
//     const datesInput = document.getElementById('event-dates');

//     const eventData = {
//         author: authorInput.value,
//         name: eventNameInput.value,
//         description: descriptionInput.value,
//         dates: [datesInput.value], 
//     };

//     try {
//         console.log(JSON.stringify(eventData));
//         const response = await fetch('http://localhost:3000/api/events', {
//             method: 'POST', // or 'PATCH' depending on your use case
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(eventData),
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Event submitted successfully:', result);
//             // Perform any other actions as needed
//         } else {
//             console.error('Error submitting event:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });
