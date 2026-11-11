fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    const booksList = document.getElementById('books-list');
    books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} - ${book.author}`;
      booksList.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
