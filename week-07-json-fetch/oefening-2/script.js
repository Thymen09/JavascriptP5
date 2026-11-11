// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)
fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    const moviesContainer = document.getElementById('films');
    const moviesList = document.createElement('ul');
    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = `${movie.title} - ${movie.director}`;
      moviesList.appendChild(li);
    });
    moviesContainer.appendChild(moviesList);
  })
  .catch(error => console.error('Fout:', error));
