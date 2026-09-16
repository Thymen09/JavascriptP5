// ============================================================
//  Week 2 — Oefening 2: Basis DOM-manipulatie
// ============================================================

// 1. Selecteer #title met getElementById en verander de tekst
//    naar iets anders met textContent
document.getElementById('title').textContent = 'Jason is knap';

// 2. Voeg een click event listener toe aan #toggle-btn.
//    Bij klik wisselt de tekstkleur van #message tussen rood en zwart.
//    Gebruik een variabele om bij te houden of de tekst nu rood is.
let isRood = false;
document.getElementById('toggle-btn').addEventListener('click', function() {
  const message = document.getElementById('message');
  isRood = !isRood;
  message.style.color = isRood ? 'red' : 'black';
});


// 3. Voeg een click event listener toe aan #greet-btn.
//    Lees de waarde van #name-input uit en toon 'Hallo, <naam>!' in #greeting.
document.getElementById('greet-btn').addEventListener('click', function() {
  const nameInput = document.getElementById('name-input').value;
  document.getElementById('greeting').textContent = `Hallo, ${nameInput}!`;
});