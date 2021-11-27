const buyTickets = document.querySelector('.buy-tickets-button');
const overlay = document.querySelector('.overlay');
const ticketsFormContainer = document.querySelector('.ticketsForm-container');
const crossSign = document.querySelector('.cross-sign');
const dateInput = document.querySelector('.date-input');
const timeInput = document.querySelector('.time-input');


buyTickets.addEventListener('click', () => {
    ticketsFormContainer.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    ticketsFormContainer.style.transform = 'translateX(-150%)';
});

crossSign.addEventListener('click', () => {
    overlay.style.display = 'none';
    ticketsFormContainer.style.transform = 'translateX(-150%)';
});

dateInput.setAttribute('placeholder', 'Date');
timeInput.setAttribute('placeholder', 'Time');