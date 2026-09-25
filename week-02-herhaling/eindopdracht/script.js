// Stap 1: Schrijf calculateTotal(bedrag, korting)
function calculateTotal(bedrag, korting) {
  const kortingsbedrag = bedrag * (korting / 100);
  return bedrag - kortingsbedrag;
}

// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
const form = document.getElementById('discount-form');
const bedragInput = document.getElementById('amount');
const kortingInput = document.getElementById('discount');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const bedrag = Number(bedragInput.value);
  const korting = Number(kortingInput.value);

  // Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
  if (bedragInput.value.trim() === '' || kortingInput.value.trim() === '' || Number.isNaN(bedrag) || Number.isNaN(korting)) {
    result.textContent = 'Voer geldige getallen in.';
    return;
  }

  const total = calculateTotal(bedrag, korting);
  result.textContent = `Totaal: €${total.toFixed(2)}`;
});

// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij