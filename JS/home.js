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
    
    e.preventDefault();
    let texto = document.querySelector('.form-control').value;
    console.log(texto.trim().toLowerCase());
    //Acá toma el string le quita espacios y deja minúsculas

    let stringTexto = texto.trim().toLowerCase();

    /*  let cajaTexto = [];
    Probar si va array vacío
    */
    
    let dato = data.events;
    let traerNombre = dato.filter(tipo => tipo.name.toLowerCase().includes(stringTexto));
    let traerDescripcion = dato.filter(tipo1 => tipo1.description.toLowerCase().includes(stringTexto));

    console.log(traerNombre);
    console.log(traerDescripcion);
    //Acá si pongo algo que coincida me levanta el o los objetos. Poniento enjoy por ejemplo sale korean style y collectivities party
})








 /*    if (traerNombre == stringTexto) {
        document.querySelector('#tarjeta').innerHTML = traerTarjeta();
    }
    else if (traerDescripcion == stringTexto) {
        document.querySelector('#tarjeta').innerHTML = traerTarjeta();
    }
    else {
        alert('The search returned no results, please try again.')
    }

    Revisar porque siempre da falso, ver si estan cruzados los métodos de array con los de string




       if (traerNombre.length > 0 || traerDescripcion.length > 0) {
        document.querySelector('#tarjeta').innerHTML = traerTarjeta();
    } else {
        alert('The search returned no results, please try again.');
    }

 */


 

