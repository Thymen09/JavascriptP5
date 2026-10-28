// Fout gevonden: _______________er stonden geen komma's en de js was niet gelinked plus de json en de li en result
// Oplossing: _______________komma's, js toevoegen, json en li. en van result results maken

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
