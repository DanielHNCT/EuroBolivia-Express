const button = document.getElementById('boton');
button.addEventListener('click', () => {
    const userEntry = prompt("¿Cuanto desea enviar?");
    const result = userEntry / 0.94;
    //const result = userEntry
    const usdtToBolivians = result * 9;
    alert(usdtToBolivians);
    const resultDisplay = document.getElementById('result');
    resultDisplay.innerText = usdtToBolivians;
    console.log(userEntry);
    console.log(usdtToBolivians);
});






