// Get a reference to the event cards container
const eventCardsContainer = document.getElementById('event-cards');

// Function to create an event card element
function createEventCard(event) {
  // Create the elements for the event card
  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  const eventName = document.createElement('h2');
  eventName.textContent = event.name;

  const eventDate = document.createElement('p');
  eventDate.textContent = `Date: ${event.date}`;

  const eventLocation = document.createElement('p');
  eventLocation.textContent = `Location: ${event.location}`;

  // Append the elements to the event card
  eventCard.appendChild(eventName);
  eventCard.appendChild(eventDate);
  eventCard.appendChild(eventLocation);

  // Return the event card element
  return eventCard;
}

// Loop through the events array and create an event card for each event
for (const event of events) {
  const eventCard = createEventCard(event);
  eventCardsContainer.appendChild(eventCard);
}
