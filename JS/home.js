//Inyección de todas las tarjetas

let todasLasTarjetas = "";

for (let event of data.events) {
todasLasTarjetas += traerTarjeta(event);
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = todasLasTarjetas;


//Pasar search y procesarlo

let search = document.querySelector('form');
search.addEventListener('submit', e => {
//Si uso el event keyup no necesitaría el botón de búsqueda, aunque el boton queda obsoleto. Podría usarse como reset(?) 
//Queda el submit que aplica mejor

e.preventDefault();
let texto = document.querySelector('.form-control').value.trim().toLowerCase();
console.log('Texto capturado: '+ texto);
//Se captura el evento sin problemas y ya queda sin espacios y en minuscula





let filtrados = data.events.filter(e => {
    return e.name.toLowerCase().includes(texto) || e.description.toLowerCase().includes(texto);
});
//Acá pude guardar en una variable más de un filtro


let mostrarFiltrados = '';

if (filtrados.length > 0) {    
    for (let filtro of filtrados) {
        mostrarFiltrados += traerTarjeta(filtro);
    }
    document.getElementById('tarjeta').innerHTML = mostrarFiltrados;
} else {
    alert('The search returned no results, please try again.');
}
});
//Todo concentrado en un solo condicional










/*let stringTexto = texto.trim().toLowerCase();
let traerNombre = data.events.filter(tipo => tipo.name.toLowerCase().includes(stringTexto));
let traerDescripcion = data.events.filter(tipo => tipo.description.toLowerCase().includes(stringTexto));
//Estas dos variables son arrays de objetos filtrados que se generan si stringTexto pasa el filtro */


/* let mostrarNombre = "";

for (let filtro of traerNombre) {
mostrarNombre += traerTarjeta(filtro);
}
if (traerNombre.length > 0) {
document.getElementById('tarjeta').innerHTML = mostrarNombre;
}
else {alert('The search returned no results, please try again.')
}


let mostrarDescripcion = "";

for (let filtro of traerDescripcion) {
mostrarDescripcion += traerTarjeta(filtro);
}

if (traerDescripcion.length > 0) {
document.getElementById('tarjeta').innerHTML = mostrarDescripcion;
}
else {alert('The search returned no results, please try again.')
}
}
); */

//Acá quedaba armado pero me sobrescribia 



/* let filtrados = traerDescripcion.concat(traerNombre);
// console.log(filtrados);
// Acá unifico los 2 arrays generados para armar un unico repetidor

let mostrarFiltrados = "";

for (let filtro of filtrados) {
mostrarFiltrados += traerTarjeta(filtro);
}
if (filtrados.length > 0) {
document.getElementById('tarjeta').innerHTML = mostrarFiltrados;
}
else alert('The search returned no results, please try again.');*/
 

//Esto funcionaba a medias, si bien achicaba todo a un solo for, me traia mas de una tarjeta al estar concateando a un solo array