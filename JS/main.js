//Función html de tarjeta dinámica

function traerTarjeta(event) {

    return  `<div class="card my-3 py-2" style="width: 20rem;">
                    <img src="${event.image}" class="" alt="...">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between">
                            <p class="parrafo">Precio $${event.price}</p>
                            <a href="Details.html?id=${event._id}" class="btn btn-danger">Ver Más</a>
                        </div>
                    </div>
                </div>
            </div>`;
}

//Función html para filtrado de checkbox

function filtradoCheck(event){

    return `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox"  value="${event}">
                <label class="form-check-label" >${event}</label>
            </div>`;
}

//Función html para search params

function encontrarDetail(event) {
    return `<div class="card"style="width: 30rem; height: 375px; border: 1px solid;">
                <img src="${event.image}" style="margin-top: 16px;" alt="">
            </div>
            <div class="card" style="width: 30rem; border: 1px solid;">
                <div class="card-body">
                <h4 class="card-title" style="text-align: center;">${event.name}</h4>
                <br>
                <h5 class="card-title mb-2">${event.description}</h5>
                <br>
                <h5 class="card-title mb-2">Date ${event.date}</h5>
                <br>
                <h5 class="card-title mb-2">${event.category}</h5>
                <h5 class="card-title mb-2">Place: ${event.place}</h5>
                <h5 class="card-title mb-2">Price: $${event.price}</h5>
                </div>
            </div>`;         
        }

//Mostrar categorias en el body

function cargarCategoriasHtml(){

    let arrayCategoria =[];
        for(let event of data.events){
            if(!arrayCategoria.includes(event.category)){
        arrayCategoria.push(event.category);
            }
        }

    let incluirCategoria = "";
    
    arrayCategoria.forEach(categoria => {
        incluirCategoria += filtradoCheck(categoria);
        }
    );
    let checkCategoria = document.getElementById('cajaDeChecks');
    checkCategoria.innerHTML = incluirCategoria;
}

//Mostrar las tarjetas

// function todasLasTarjetas(){
//     let todasLasTarjetas = "";
  
//   for (let event of data.events) {
//     todasLasTarjetas += traerTarjeta(event);
//   }
  
//   let tarjeta = document.getElementById('tarjeta');
//   tarjeta.innerHTML = todasLasTarjetas;
//   }

//Mostrar tarjetas pasadas

//   function mostrarTarjetasPast(){

//     let tarjetasPasadas = "";
// let currentDate = new Date(data.currentDate);

// for(let event of data.events){

//   let eventDate = new Date(event.date);

//   if (eventDate < currentDate) {
//       tarjetasPasadas += traerTarjeta(event);
//   }
// }

// let tarjeta = document.getElementById('tarjeta');
// tarjeta.innerHTML = tarjetasPasadas;
  
// }

//Mostrar tarjetas futuras

/* function mostrarTarjetasUpcoming() {
    let tarjetasFuturas = "";
    let currentDate = new Date(data.currentDate);

    for (let event of data.events) {

        let eventDate = new Date(event.date);

        if (eventDate > currentDate) {
            tarjetasFuturas += traerTarjeta(event);
        }
    }
let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = tarjetasFuturas;
} */



 /*  function mostrarFiltrados(){

    let mostrarFiltrados = '';
    for (let filtro of filtrados) {
    mostrarFiltrados += traerTarjeta(filtro);
  }
  tarjeta.innerHTML = mostrarFiltrados;
}

 */
  

//Funcion para mostrar cartar de check

/* function aplicarFiltroCheck() {
    let checkFiltrado = data.events.filter(e => {
      
      
      let categoria = e.category.includes(clickado);
  
      return  (categoria || clickado.length === 0);
      
    })

    let mostrarClickados = '';
  if (clickado.length > 0){    
    for (let clicks of clickado) {
      mostrarClickados += traerTarjeta(clicks);
    }
    document.getElementById('tarjeta').innerHTML = mostrarClickados;
    } 
  else{
      todasLasTarjetas;
    }
  } */
