export function addDateField() {
  const dateInput = document.getElementById('event-dates');
  const newDateInput = dateInput.cloneNode(true);
  newDateInput.value = '';
  const createButton = document.querySelector('.form-event__btn:last-of-type');
  newDateInput.style.display = 'block';
  createButton.parentNode.insertBefore(newDateInput, createButton.nextSibling);
}

  