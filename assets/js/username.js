export function initializeUsername() {
    const newEvent = JSON.parse(localStorage.getItem('newEvent')) || {};

    if (!newEvent.author) {
        const enteredUsername = prompt("Please enter your username:");

        if (enteredUsername) {
            newEvent.author = enteredUsername;
            localStorage.setItem('newEvent', JSON.stringify(newEvent));

            const usernameElement = document.getElementById('username');
            usernameElement.textContent = `Welcome, ${enteredUsername}`;
            usernameElement.classList.add('user-welcome');
        } else {
            alert("You must enter a username. Please refresh the page and try again.");
        }
    } else {
        const usernameElement = document.getElementById('username');
        usernameElement.textContent = `Welcome, ${newEvent.author}`;
        usernameElement.classList.add('user-welcome');
    }
}



