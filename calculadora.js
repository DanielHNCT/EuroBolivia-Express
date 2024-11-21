const info = document.getElementById('info-container');
const informacion = document.createElement('p');
info.appendChild(informacion);
informacion.innerHTML = 'Cel : +33 6 65 37 54 41<br>Correo : correo@hotmail.fr';

const firstTitle = document.getElementById('headings');
const firstHeading = document.createElement('h1');
firstTitle.appendChild(firstHeading);
firstHeading.innerText = "EuroBolivia Express";

const secondTitle = document.getElementById('headings');
const secondHeading = document.createElement('h2');
firstTitle.appendChild(secondHeading);
secondHeading.innerText = "¡Envía € a bolivia a mejor precio!";

const button = document.getElementById('button');
const firstButton = document.createElement('button');
button.appendChild(firstButton);
button.innerText = 'CALCULAR';


button.addEventListener('click', () => {
    const userEntry = prompt("¿Cuanto desea enviar?");
    const result = userEntry / 0.94;
    //const result = userEntry
    const usdtToBolivians = result * 9;
    alert(`el total de Bs es de : ${usdtToBolivians}`);
    const resultDisplay = document.getElementById('result');
    resultDisplay.innerText = usdtToBolivians;
    console.log(userEntry);
    console.log(`User send ${usdtToBolivians}bs`);
});

