// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
document.getElementById("button").addEventListener("click", function() {
    var input = document.getElementById("input").value;
    localStorage.setItem("invoer", input);
});

// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
document.getElementById("button2").addEventListener("click", function() {
    var opgeslagenInvoer = localStorage.getItem("invoer");
    // Null-check: toon een melding als er nog niets opgeslagen is
    if (opgeslagenInvoer === null) {
        alert("Er is nog niets opgeslagen.");
    } else {
        alert("Opgeslagen invoer: " + opgeslagenInvoer);
    }
});
