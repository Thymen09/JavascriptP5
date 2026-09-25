let title = document.getElementById('title');
let button = document.getElementById('btn');
let section = document.getElementById('section');

let name = "Thymen"
let opleiding = "SOD"
let aantalklikken = 0

const berekenPunten = () => {
    return aantalklikken * 10
}

button.addEventListener('click', () => {
    aantalklikken +=1

    title.textContent = `Hoi, ik ben ${name} en ik doe ${opleiding}`;
        const p = document.createElement('p');

    p.textContent = `Ik heb ${berekenPunten()} keer geklikt`;

    section.appendChild(p)
})