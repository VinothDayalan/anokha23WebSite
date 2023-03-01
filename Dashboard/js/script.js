// script.js

// Get elements
const addEventButton = document.getElementById('add-event-button');
const eventContainer = document.getElementById('event-container');

// Add event listener to button
addEventButton.addEventListener('click', function() {
    // Open event page in a new window
    const eventPage = window.open('event.html', 'Add Event', 'width=500,height=500');

    // Add event listener to event page form
    eventPage.document.getElementById('event-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get values from form
        const title = eventPage.document.getElementById('event-title').value;
        const date = eventPage.document.getElementById('event-date').value;
        const time = eventPage.document.getElementById('event-time').value;
        const description = eventPage.document.getElementById('event-description').value;

        // Create event card
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventTitle = document.createElement('h2');
        eventTitle.classList.add('event-title');
        eventTitle.innerText = title;

        const eventDateTime = document.createElement('p');
        eventDateTime.classList.add('event-date');
        eventDateTime.innerText = `${date} at ${time}`;

        const eventDescription = document.createElement('p');
        eventDescription.classList.add('event-description');
        eventDescription.innerText = description;

        eventCard.appendChild(eventTitle);
        eventCard.appendChild(eventDateTime);
        eventCard.appendChild(eventDescription);

        eventContainer.appendChild(eventCard);

        // Reset form and close event page
        eventPage.document.getElementById('event-form').reset();
        eventPage.close();
    });
});
