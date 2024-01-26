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
getAllEvents();


async function displayEvents() {
    try {
        const { availabilities, events } = await getAllEvents();
        const container = document.getElementById('container-cards');

        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            const availability = availabilities[i];

            if (typeof event !== 'object' || !availability) {
                console.error('Invalid event or availability object:', event, availability);
                continue;
            }

            const card = document.createElement('div');
            card.classList.add('card');

            // HEADER
            const header = document.createElement('div');
            header.classList.add('card__header');

            const title = document.createElement('h2');
            title.classList.add('card__header__title');
            title.textContent = event.name || ''; // Assuming you have an 'eventName' property

            const author = document.createElement('h3');
            author.classList.add('card__header__author');
            author.textContent = `par ${event.author || ''}`; // Assuming you have an 'author' property

            const description = document.createElement('h3');
            description.classList.add('card__header__descp');
            description.textContent = event.description || ''; // Assuming you have a 'description' property

            header.appendChild(title);
            header.appendChild(author);
            header.appendChild(description);

            card.appendChild(header);

            // TABLE
            const table = document.createElement('table');
            table.classList.add('card__table');

            const datesRow = document.createElement('tr');
            datesRow.appendChild(document.createElement('th')); // Empty cell
            availability.attendees[0].dates.forEach(dateInfo => {
                const dateCell = document.createElement('th');
                dateCell.textContent = dateInfo.date;
                datesRow.appendChild(dateCell);
            });
            table.appendChild(datesRow);

            availability.attendees.forEach(attendee => {
                const attendeeRow = document.createElement('tr');

                // Attendee name in the first cell
                const nameCell = document.createElement('td');
                nameCell.textContent = attendee.attendeeName;
                attendeeRow.appendChild(nameCell);

                // Availability for each date in subsequent cells
                attendee.dates.forEach(dateInfo => {
                    const availabilityCell = document.createElement('td');

                    // Check icon
                    const checkIcon = document.createElement('img');
                    checkIcon.src = dateInfo.availability ? "assets/images/icons/green-check.svg" : "assets/images/icons/grey-check.svg";
                    checkIcon.alt = dateInfo.availability ? "Available" : "Not Available";
                    checkIcon.classList.add("icons");
                    availabilityCell.appendChild(checkIcon);

                    // X icon
                    const xIcon = document.createElement('img');
                    xIcon.src = dateInfo.availability ? "assets/images/icons/grey-x.svg" : "assets/images/icons/red-x.svg";
                    xIcon.alt = dateInfo.availability ? "Not Available" : "Available";
                    xIcon.classList.add("icons");
                    availabilityCell.appendChild(xIcon);

                    attendeeRow.appendChild(availabilityCell);
                });

                table.appendChild(attendeeRow);
            });
            card.appendChild(table);

            //buttons
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('card__btn');

            const joinButton = document.createElement('button');
            joinButton.type = 'submit';
            joinButton.classList.add('card__btn__join');
            joinButton.textContent = 'Participez';
            buttonContainer.appendChild(joinButton);

            // const modifyButton = document.createElement('button');
            // modifyButton.type = 'submit';
            // modifyButton.classList.add('card__btn__modif');
            // modifyButton.textContent = 'Modifier';
            // buttonContainer.appendChild(modifyButton);

            const deleteButton = document.createElement('button');
            deleteButton.type = 'submit';
            deleteButton.classList.add('card__btn__suppress');
            deleteButton.textContent = 'Supprimer';
            buttonContainer.appendChild(deleteButton);

            card.appendChild(buttonContainer);


            container.appendChild(card);
        }
    } catch (error) {
        console.error('Error displaying events:', error);
    }
}

displayEvents();





