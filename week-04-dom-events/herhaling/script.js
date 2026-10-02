const shopForm = document.querySelector('#shop-form');
const shopInput = document.querySelector('#shop-input');
const counter = document.querySelector('#counter');
const list = document.querySelector('#list');

counter.addEventListener('updateTeller', () => {
    const aantalItems = list.querySelectorAll('li').length;
    counter.textContent = `Aantal items: ${aantalItems}`;

    const aantalAangevinkt = list.querySelectorAll('input:checked').length;
    counter.textContent += ` | Aangevinkt: ${aantalAangevinkt}`;

    counter.textContent = `${aantalAangevinkt}/${aantalItems} producten in je mandje`;
})

shopForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputValue = shopInput.value.trim();
    if (inputValue === '') return;

    const li = document.createElement('li');
    li.textContent = inputValue;
    list.appendChild(li);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Verwijder';
    li.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
        li.remove();
        updateCounter(); 
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    list.appendChild(li);
    updateCounter();
    shopInput.value = '';
})