// Pour obtenir tous les événements
fetch('http://localhost:3000/api/events')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  