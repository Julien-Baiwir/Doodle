export function initializeUsername() {
    const usernameElement = document.getElementById('username');
    
    if (!usernameElement.textContent) {
        const enteredUsername = prompt("Please enter your username:");
        const authorInputElement = document.getElementById('event-author');
authorInputElement.value = enteredUsername;

        if (enteredUsername) {
            usernameElement.textContent = `Welcome, ${enteredUsername}`;
            usernameElement.classList.add('user-welcome');
        } else {
            alert("You must enter a username. Please refresh the page and try again.");
        }
    }
}