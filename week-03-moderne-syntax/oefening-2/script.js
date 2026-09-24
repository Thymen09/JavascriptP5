// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message

document.getElementById('btn-1').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'knop 1 geklikt';
});

document.getElementById('btn-2').addEventListener('click', () => {
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.textContent = 'ding toegevoegd';
    list.appendChild(listItem);
});

document.getElementById('btn-3').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.classList.toggle('active');
});