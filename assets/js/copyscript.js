// import { initializeUsername, initializeSwitchUserIcon } from './username.js';
// import { addDateField } from './addDateField.js';

// initializeUsername();

// initializeSwitchUserIcon();

// const addDateBtn = document.querySelector('.form-event__btn__plus');
// addDateBtn.addEventListener('click', addDateField);

// -----------
// -----------
async function getAllEvents() {
    try {
        const response = await fetch('http://localhost:3000/api/events');
        if (response.ok) {
            const events = await response.json();
            //
            events.forEach((event) => {
                event.dates.forEach((date) => {
                    console.log('Date:', date.date);

                    date.attendees.forEach((attendee) => {
                        console.log('Attendee Name:', attendee.name);
                        console.log('Attendee Availability:', attendee.available);
                    });
                });
            });

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

async function generateEventCard() {
    try {
        const events = await getAllEvents();
        const eventsContainer = document.getElementById('container-cards');

        events.forEach((event) => {

            if (typeof event !== 'object') {
                console.error('Invalid event object:', event);
                return;
            }

            const card = document.createElement('div');
            card.classList.add('card');

            const header = document.createElement('div');
            header.classList.add('card__header');

            const title = document.createElement('h2');
            title.classList.add('card__header__title');
            title.textContent = event.name || '';

            const author = document.createElement('h3');
            author.classList.add('card__header__author');
            author.textContent = `par ${event.author || ''}`;

            const description = document.createElement('h3');
            description.classList.add('card__header__descp');
            description.textContent = event.description || '';

            header.appendChild(title);
            header.appendChild(author);
            header.appendChild(description);

            // tableau
            const table = document.createElement('table');
            table.classList.add('card__table');

            // colonnes
            const thead = document.createElement('thead');
            const dateColumn = document.createElement('tr');
            dateColumn.innerHTML = '<th></th>';

            event.dates.forEach((date) => {
                const th = document.createElement('th');
                th.textContent = date;
                dateColumn.appendChild(th);
            });

            thead.appendChild(dateColumn);
            table.appendChild(thead);

            // rangées
            const tbody = document.createElement('tbody');
            
            const attendeeRow = document.createElement('tr');
            attendeeRow.innerHTML = '<td></td>';

            date.attendees.forEach((attendee) => {
                const tr = document.createElement('tr');
                tr.textContent = attendee.name;
                dateRow.appendChild(tr);
            });

            tbody.appendChild(dateRow);
            table.appendChild(tbody);

            //ajoute le tableau
            card.appendChild(header);
            card.appendChild(table);

            eventsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error generating event cards:', error);
    }
}

generateEventCard();


async function generateEventCard() {
    try {
        const events = await getAllEvents();
        const eventsContainer = document.getElementById('container-cards');

        events.forEach((event) => {

            if (typeof event !== 'object') {
                console.error('Invalid event object:', event);
                return;
            }

            const card = document.createElement('div');
            card.classList.add('card');

            const header = document.createElement('div');
            header.classList.add('card__header');

            const title = document.createElement('h2');
            title.classList.add('card__header__title');
            title.textContent = event.name || '';

            const author = document.createElement('h3');
            author.classList.add('card__header__author');
            author.textContent = `par ${event.author || ''}`;

            const description = document.createElement('h3');
            description.classList.add('card__header__descp');
            description.textContent = event.description || '';

            header.appendChild(title);
            header.appendChild(author);
            header.appendChild(description);

            // tableau

            const table = document.createElement('table');
            table.classList.add('card__table');
             
            // colonnes
            const thead = document.createElement('thead');
            const dateColumn = document.createElement('tr');
            dateColumn.innerHTML = '<th></th>';

            event.dates.forEach((date) => {
                const th = document.createElement('th');
                th.textContent = date.date;
                dateColumn.appendChild(th);
            });

            // rangées
            const tbody = document.createElement('tbody');
            const attendeeRow = document.createElement('tr');
            attendeeRow.innerHTML = '<td></td>';

            date.attendees.forEach((attendee) => {
                const tr = document.createElement('tr');
                tr.textContent = attendee.name;
                dateRow.appendChild(tr);
            });

            thead.appendChild(dateRow);
            table.appendChild(thead);
            card.appendChild(table);
            // const tbody = document.createElement('tbody');

            // table.appendChild(tbody);

            // if (event.attendees && Array.isArray(event.attendees)) {
            //     event.attendees.forEach((attendee) => {
            //         const row = document.createElement('tr');
            //         const nameCell = document.createElement('td');
            //         nameCell.textContent = attendee.name || '';
            //         row.appendChild(nameCell);

            //         if (event.dates && Array.isArray(event.dates)) {
            //             event.dates.forEach((date) => {
            //                 const td = document.createElement('td');
            //                 const presenceMark = document.createElement('span');
            //                 presenceMark.classList.add('presence-mark');

            //                 // Trouver la disponibilité de l'invité pour la date actuelle
            //                 const availability = attendee.dates.find((d) => d.date === date);
            //                 presenceMark.classList.add(availability ? (availability.available ? 'v-mark' : 'x-mark') : '');

            //                 td.appendChild(presenceMark);
            //                 row.appendChild(td);
            //             });
            //         }

            //         tbody.appendChild(row);
            //     });
            // }

            // table.appendChild(tbody);

            // //ajout boutons
            // const buttonContainer = document.createElement('div');
            // buttonContainer.classList.add('card__btn');

            // // Participez Button
            // const joinButton = document.createElement('button');
            // joinButton.type = 'submit';
            // joinButton.classList.add('card__btn__join');
            // joinButton.textContent = 'Participez';
            // buttonContainer.appendChild(joinButton);

            // // Modifier Button
            // const modifyButton = document.createElement('button');
            // modifyButton.type = 'submit';
            // modifyButton.classList.add('card__btn__modif');
            // modifyButton.textContent = 'Modifier';
            // buttonContainer.appendChild(modifyButton);

            // // Supprimer Button
            // const deleteButton = document.createElement('button');
            // deleteButton.type = 'submit';
            // deleteButton.classList.add('card__btn__suppress');
            // deleteButton.textContent = 'Supprimer';
            // buttonContainer.appendChild(deleteButton);

            //ajout cartes
            card.appendChild(header);
           
            // card.appendChild(buttonContainer);

            eventsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error generating event cards:', error);
    }
}

generateEventCard();




// const createEventForm = document.getElementById('create-event');
// const containerCards = document.getElementById('container-cards');

// createEventForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const events = await getAllEvents();

//   events.forEach((event) => {
//     const eventCard = generateEventCard(event);
//     containerCards.appendChild(eventCard);
//   });
// });

