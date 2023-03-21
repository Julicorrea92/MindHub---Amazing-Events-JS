//Función html de tarjeta dinámica

function traerTarjeta(events) {

    return `<div class="card my-3 py-2" style="width: 20rem;">
                    <img src="${events.image}" class="" alt="...">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${events.name}</h5>
                    <p class="card-text">${events.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between">
                            <p class="parrafo">Price $${events.price}</p>
                            <a href="Details.html?id=${events._id}" class="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
            </div>`;
}

//Función html para filtrado de checkbox

function filtradoCheck(events) {

    return `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox"  value="${events}">
                <label class="form-check-label" >${events}</label>
            </div>`;
}

//Función html para search params

function encontrarDetail(events) {
    return `<div class="card"style="width: 30rem; height: 375px; border: 1px solid;">
                <img src="${events.image}" style="margin-top: 16px;" alt="">
            </div>
            <div class="card" style="width: 30rem; border: 1px solid;">
                <div class="card-body">
                <h4 class="card-title" style="text-align: center;">${events.name}</h4>
                <br>
                <h5 class="card-title mb-2">${events.description}</h5>
                <br>
                <h5 class="card-title mb-2">Date ${events.date}</h5>
                <br>
                <h5 class="card-title mb-2">${events.category}</h5>
                <h5 class="card-title mb-2">Place: ${events.place}</h5>
                <h5 class="card-title mb-2">Price: $${events.price}</h5>
                </div>
            </div>`;
}

//Mostrar categorias en el body

function cargarCategoriasHtml(data) {

    let arrayCategoria = [];
    for (let events of data.events) {
        if (!arrayCategoria.includes(events.category)) {
            arrayCategoria.push(events.category);
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


//Trabajo de armado de tablas

let arrayMayorPorcentaje = [];
let arrayMenorPorcentaje = [];
let arrayCapacidad = [];

function traerPorcentajeAsistencia(data) {
    let nombres = [];
    for (let nombre of data.events) {
        if (!nombres.includes(nombre.name) && (nombre.assistance != undefined)) {
            nombres.push(nombre.name);
        }
    }
    let porcentaje = [];
    for (let asistencia of data.events) {
        if (asistencia.assistance != undefined) {
            porcentaje.push((asistencia.assistance) / (asistencia.capacity) * 100);
        }
    }
    let porcentajeRedondeado = porcentaje.map((num) => {
        return num.toFixed(2);
    });
    let valores = nombres.map((name, index) => {
        return { name: name, value: porcentajeRedondeado[index] };
    });
    valoresOrdenados = valores.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });

    let mayorPorcentaje = valoresOrdenados.slice(0, 5);
    arrayMayorPorcentaje = mayorPorcentaje.map(texto => {
        return texto.name + ': ' + texto.value + ' %.';
    });

    let menorPorcentaje = valoresOrdenados.slice(13, 18).reverse();
    arrayMenorPorcentaje = menorPorcentaje.map(texto => {
        return texto.name + ': ' + texto.value + ' %.';
    });

    let nombresI = [];
    for (let nombre of data.events) {
        nombresI.push(nombre.name);
    }
    let capacidad = [];
    for (let capacidadI of data.events) {
        capacidad.push(capacidadI.capacity);
    }
    let valoresI = nombres.map((name, index) => {
        return { name: name, value: capacidad[index] };
    });

    let capacidadOrdenadas = valoresI.sort((function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }));

    let mayorCapacidad = capacidadOrdenadas.slice(0, 5);
    arrayCapacidad = mayorCapacidad.map(texto => {
        return texto.name + ': ' + texto.value + '.';
    });
}

function esEventoPasado(event) {
    let currentDate = new Date(event.currentDate);
    let eventDate = new Date(event.date);
    return eventDate < currentDate;
  }
  function esEventoFuturo(event) {
    let currentDate = new Date(event.currentDate);
    let eventDate = new Date(event.date);
    return eventDate > currentDate;
  }

function traerEventosFuturos(data) {
    
    let eventosFuturos = "";
    let categoria = [];

    for (let event of data.events) {
      if (!categoria.includes(event.category) && !esEventoPasado(event)) {
        
        let total = 0;
        let estimado = 0;
        let capacidad = 0;
        let porcentajePromedio = 0;
        categoria.push(event.category);
        
        for (let evento of data.events) {
            if (evento.category == event.category &&  evento.estimate != undefined) {
                estimado += evento.estimate;
                capacidad += evento.capacity;
                total = evento.estimate * evento.price;
            }
            porcentajePromedio = ((estimado)/capacidad)*100;
        }
        if (isNaN(porcentajePromedio)){
            porcentajePromedio = 0;
        }
        eventosFuturos += crearTr(event, total, porcentajePromedio)
      }
    }
    loadFuturos(eventosFuturos);  
  }

  function traerEventosPasados(data) {
  
    let eventosPasados = "";
    let categoria = [];

    for (let event of data.events) {
        if (!categoria.includes(event.category) && !esEventoFuturo(event)) {
            
            
        let total = 0;
        let asistencia = 0;
        let capacidad = 0;
        let porcentajePromedio = 0;

        categoria.push(event.category);
        
        
        for (let evento of data.events) {
            if (evento.category == event.category && evento.assistance != undefined) {
                asistencia += evento.assistance;
                capacidad += evento.capacity;
                total = evento.assistance * evento.price;
            }
            porcentajePromedio = ((asistencia)/capacidad)*100;
        }
        if (isNaN(porcentajePromedio)){
            porcentajePromedio = 0;
        }
        eventosPasados += crearTr(event, total, porcentajePromedio)
      }
    }
    loadPasados(eventosPasados);  
  }

  //Mostrar tablas

function loadPorcentajes() {
    let container = document.getElementById('gral');
    let dibujarTablas = '';

    for (let i = 0; i < 5; i++) {

        let mayorPorcentaje = arrayMayorPorcentaje[i];
        let menorPorcentaje = arrayMenorPorcentaje[i];
        let maximaCapacidad = arrayCapacidad[i];

        dibujarTablas += `<tr>
        <td>${mayorPorcentaje}</td>
        <td>${menorPorcentaje}</td>
        <td>${maximaCapacidad}</td>
    </tr>`;
    };
    container.innerHTML = dibujarTablas;
}

  function loadFuturos(eventosFuturos){
    let container = document.getElementById('futuro');
    container.innerHTML = eventosFuturos;
  }


  function loadPasados(eventosPasados){
    let container = document.getElementById('pasado');
    container.innerHTML = eventosPasados;
  }


  function crearTr(evento, total, porcentaje) {
    return `
    <tr>
    <td>${evento.category} </td>
    <td>$${total} </td>
    <td>${porcentaje.toFixed(2)}% </td>
    </tr>
    `
  }


 