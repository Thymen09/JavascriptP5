// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
const button = document.getElementById('add');

button.addEventListener('click', () => {
    const lijst = document.createElement('li')
    lijst.textContent = document.getElementById('input').value.trim()
    document.getElementById('list').appendChild(lijst)

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "verwijderen";

    lijst.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        lijst.remove();
    })
})