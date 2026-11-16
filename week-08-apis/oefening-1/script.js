fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
    const charactersContainer = document.getElementById('characters');
    data.results.forEach(character => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
      `;
      charactersContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Fout:', error));
