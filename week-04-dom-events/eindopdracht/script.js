// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('tasks');
const counter = document.getElementById('counter');

function taakToevoegen() {
	const taakTekst = input.value.trim();
	if (taakTekst === '') {
		return;
	}

	const taak = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';

	const tekst = document.createElement('span');
	tekst.textContent = taakTekst;

	const verwijderKnop = document.createElement('button');
	verwijderKnop.type = 'button';
	verwijderKnop.textContent = 'Verwijderen';

	taak.appendChild(checkbox);
	taak.appendChild(tekst);
	taak.appendChild(verwijderKnop);

	checkbox.addEventListener('click', () => {
		taak.classList.toggle('afgevinkt');
	});
	verwijderKnop.addEventListener('click', () => {
		taak.remove();
		toonTaken();
	});

	taskList.appendChild(taak);
	input.value = '';
	toonTaken();
}

function toonTaken() {
	const aantalTaken = taskList.children.length;

	if (aantalTaken === 1) {
		counter.textContent = '1 taak';
	} else {
		counter.textContent = aantalTaken + ' taken';
	}
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	taakToevoegen();
});
