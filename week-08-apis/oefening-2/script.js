let allPokemon = [];

// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    // Sla data.results op in allPokemon, voeg het id toe via de index
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));
    // Toon alle Pokémon in #pokemon-list met naam en afbeelding
    const pokemonListContainer = document.getElementById('pokemon-list');
    allPokemon.forEach(pokemon => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
      `;
      pokemonListContainer.appendChild(article);
    });
    // Toon het aantal in #counter
    document.getElementById('counter').textContent = `Aantal Pokémon: ${allPokemon.length}`;
  })
  .catch(error => console.error('Fout:', error));

// Voeg een event listener toe aan #search-bar
// Filter allPokemon op naam en herrender de lijst
document.getElementById('search-bar').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.includes(searchTerm));
  // Leeg de lijst
  document.getElementById('pokemon-list').innerHTML = '';
  // Toon de gefilterde Pokémon
  filteredPokemon.forEach(pokemon => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${pokemon.name}</h3>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
    `;
    document.getElementById('pokemon-list').appendChild(article);
  });
});
