const info = document.getElementById('info-container');
const informacion = document.createElement('p');
info.appendChild(informacion);
informacion.innerHTML = 'Cel : +33 6 65 37 54 41<br>Correo : correo@hotmail.fr';

const firstTitle = document.getElementById('headings');
const firstHeading = document.createElement('h1');
firstTitle.appendChild(firstHeading);
firstHeading.innerText = "EuroBolivia Express";

const secondTitle = document.createElement('h2');
firstTitle.appendChild(secondTitle);
secondTitle.innerText = "¡Envía € a Bolivia al mejor precio!";

const button = document.createElement('button'); 
button.innerText = 'CALCULAR';
document.getElementById('button').appendChild(button); 

button.addEventListener('click', () => {
    const userEntry = prompt("¿Cuánto desea enviar?");
    if (userEntry && !isNaN(userEntry)) {
        const result = userEntry / 0.94;
        const usdtToBolivians = result * 9;
        alert(`El total en Bs es de: ${usdtToBolivians}`);
        
        const resultDisplay = document.getElementById('result');
        resultDisplay.innerText = `Total: ${usdtToBolivians.toFixed(2)} Bs`;
        console.log(`Usuario envía: ${usdtToBolivians.toFixed(2)} Bs`);
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
});

const axios = require('axios');
const crypto = require('crypto');

const API_KEY = "bg_47d37f908a76a456d300ff9b5977758e";
const API_SECRET = "155a1ab337d4b35f80cbd8a2abdfac3f85f0e514f3b0b340445c28306126cba7";
const PASSPHRASE = "6vANCE6NK6RaY";

const BASE_URL = "https://api.bitget.com";
const ENDPOINT = "/api/spot/v1/account/assets";

function generateHeaders(method, endpoint, query = "") {
    const timestamp = Date.now().toString();
    const prehash = timestamp + method.toUpperCase() + endpoint + query;
    const signature = crypto.createHmac('sha256', API_SECRET)
                            .update(prehash)
                            .digest('hex');

    return {
        'Content-Type': 'application/json',
        'ACCESS-KEY': API_KEY,
        'ACCESS-SIGN': signature,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-PASSPHRASE': PASSPHRASE,
    };
}

async function fetchAssets() {
    try {
        const headers = generateHeaders("GET", ENDPOINT);
        const response = await axios.get(BASE_URL + ENDPOINT, { headers });
        console.log(response.data);
    } catch (error) {
        console.error("Erreur :", error.message);
    }
}

fetchAssets();