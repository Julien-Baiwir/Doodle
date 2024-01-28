export function btnDelete() {
    const deleteButtons = document.querySelectorAll(".card__btn__suppress");
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", async function () {
        const eventId = this.getAttribute('data-event-id');
  
        // Ajoutez une vérification pour s'assurer que eventId n'est pas null avant d'appeler toString()
        if (eventId !== null) {
          try {
            const response = await fetch(`http://localhost:3000/api/events/${eventId}`, {
              method: 'DELETE',
            });
          } catch (error) {
            console.error('Erreur lors de la suppression de l\'événement:', error);
          }
        } else {
          console.error('L\'attribut data-event-id n\'est pas défini sur le bouton de suppression.');
        }
      });
    });
  }