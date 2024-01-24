import { initializeUsername } from './username.js';
import { initializePikaday } from './pickADay.js';

initializeUsername();

const createEventForm = document.getElementById('create-event');
const picker = initializePikaday('event-dates', 'selected-dates');
console.log('Picker:', picker);

createEventForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const authorInput = document.getElementById('event-author');
  const nameInput = document.getElementById('event-name');
  const descriptionInput = document.getElementById('event-description');

  const selectedDates = picker.getDate() || [];
  
  const eventData = {
    author: authorInput.value,
    name: nameInput.value,
    description: descriptionInput.value,
    dates: Array.isArray(selectedDates) ? selectedDates.map(date => date.toISOString().split('T')[0]) : [selectedDates.toISOString().split('T')[0]],
  };

  try {
    const response = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      const newEvent = await response.json();
      console.log('Event created:', newEvent);

    } else {
      const errorData = await response.json();
      console.error('Error creating event:', errorData);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});







