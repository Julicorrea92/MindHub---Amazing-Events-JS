//Inyección de tarjetas futuras

let tarjetasFuturas = "";
let currentDate = new Date(data.currentDate);

for(let event of data.events){

    let eventDate = new Date(event.date);

    if (eventDate > currentDate) {
        tarjetasFuturas += traerTarjeta(event);
    }
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = tarjetasFuturas;