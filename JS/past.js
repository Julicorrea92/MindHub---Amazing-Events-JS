//Inyección de tarjetas pasadas

let tarjetasPasadas = "";
let currentDate = new Date(data.currentDate);

for(let event of data.events){

    let eventDate = new Date(event.date);

    if (eventDate < currentDate) {
        tarjetasPasadas += traerTarjeta(event);
    }
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = tarjetasPasadas;