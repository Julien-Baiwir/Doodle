async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/api/events');
      const data = await response.json();
  
      const eventListContainer = document.getElementById('eventList');
  
      data.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.innerHTML = 
        <h1>Nom de l'auteur
          
        </h1>
        `<h3>${event.name}event</h3>
        <p>${event.description}</p>`
        
        ;
        eventListContainer.appendChild(eventDiv);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }


fetchData();
  
  async function fetchSpecificEvent(eventId) {
    try {
      const response = await fetch(`http://localhost:3000/api/events/${eventId}`);
      const eventData = await response.json();
  
      
      const eventContainer = document.getElementById('specificEvent');
      const eventDiv = document.createElement('div');
      eventDiv.innerHTML = `<h3>${eventData.name}</h3><p>${eventData.description}</p>`;
      eventContainer.appendChild(eventDiv);
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'événement:', error);
    }
  }
  
  fetchSpecificEvent('f5b6564b5dc4');