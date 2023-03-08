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

//Pasar search y procesarlo

let search = document.querySelector('form');
search.addEventListener('submit', e => {
    e.preventDefault();
    let texto = document.querySelector('.form-control').value.trim().toLowerCase();
    let filtrados = data.events.filter(e => {
        return e.name.toLowerCase().includes(texto) || e.description.toLowerCase().includes(texto);
      }
    );

    let currentDate = new Date(data.currentDate);
    let filtradosFuturos = "";
    let arrayFuture = [];
    
    //Se armo array donde almacenar antes de comparar

  for(let event of filtrados){
      let eventDate = new Date(event.date);
      // console.log(eventDate, typeof eventDate);

      if (eventDate > currentDate) {
        filtradosFuturos += traerTarjeta(event);
        arrayFuture.push(filtradosFuturos);
        }       
      }
      if (arrayFuture.length > 0){
        document.getElementById('tarjeta').innerHTML = filtradosFuturos
      }
      else{ 
        alert('The search returned no results, please try again.');//Si llego en lugar de alert va un modal o tarjeta 
      }
    }
  );


//Filtrar con checkbox

categorias()