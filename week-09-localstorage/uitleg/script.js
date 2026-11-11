let message = "dit is een bericht"

let input = document.querySelector('#input')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    input.inputValue = input.value.trim();
    localStorage.setIten('input value', inputValue)

})

let getItemFromStore = localStorage.getItem('input value');
console.log(getItemFromStore)