//Inyección de todas las tarjetas

let todasLasTarjetas = "";

for (let event of data.events){
    
    todasLasTarjetas += traerTarjeta(event);
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = todasLasTarjetas;