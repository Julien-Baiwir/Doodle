import { initializeUsername, initializeSwitchUserIcon } from './userName.js';
import { addDateField } from './addDateField.js';
import { getAllEvents } from './getAllEvents.js';
import { addDomEvents } from './addDomEvents.js';

initializeUsername();

initializeSwitchUserIcon();

const addDateBtn = document.querySelector('.form-event__btn__plus');
addDateBtn.addEventListener('click', addDateField);

getAllEvents();


const addCards = document.querySelector('.menu__btn__events');
addCards.addEventListener('click', addDomEvents);






