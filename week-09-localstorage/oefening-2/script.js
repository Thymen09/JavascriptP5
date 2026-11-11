const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
localStorage.setItem('user', user);
let retrievedUser = localStorage.getItem('user');
console.log(retrievedUser);

// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
localStorage.setItem('user', JSON.stringify(user));
let retrievedUserParsed = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUserParsed);

// Stap 3: toon het resultaat van beide methoden op de pagina
document.getElementById('output1').innerText = retrievedUser;
document.getElementById('output2').innerText = retrievedUserParsed;