// Fonction pour récupérer les valeurs du formulaire
function getFormData() {
    const eventName = document.getElementById('event-name').value;
    const eventAuthor = document.getElementById('event-author').value;  // Ajoutez un champ d'auteur dans le formulaire
    const eventDescription = document.getElementById('event-description').value;
    const eventDate = document.getElementById('event-date').value;
  
    return {
      name: eventName,
      author: eventAuthor,  // Assurez-vous de renommer correctement si nécessaire
      description: eventDescription,
      date: eventDate,
    };
  }
  
  // Fonction appelée lors du clic sur le bouton "Créer"
  async function createEvent() {
    try {
      // Récupérer les données du formulaire
      const eventData = getFormData();
  
      // Envoyer les données au backend
      const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de la création de l\'événement sur le backend');
      }
  
      // Récupérer la réponse du backend
      const createdEvent = await response.json();
  
      // Mettre à jour l'interface utilisateur avec l'événement créé
      updateUIWithCreatedEvent(createdEvent);
    } catch (error) {
      console.error('Erreur :', error.message);
    }
  }
  
  // Fonction pour mettre à jour l'interface utilisateur
  function updateUIWithCreatedEvent(event) {
    // Ajouter le nouvel événement à une liste, ou mettre à jour l'interface selon vos besoins
    // Exemple : ajouter à une liste
    const eventsList = document.getElementById('events-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${event.name} - ${event.author} - ${event.description} - ${event.date}`;
    eventsList.appendChild(listItem);
  }
  