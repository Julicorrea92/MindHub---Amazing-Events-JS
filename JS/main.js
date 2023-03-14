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

//Funcion para inyectar datos en las tablas

function asistenciaMax(event){
    return `<td><p>${event}</p></td>`
}
function asistenciaMin(event){
    return `<td><p>${event}</p></td>`
}
function capacidadMax(event){
    return `<td><p>${event}</p></td>`
}

function dibujarTablas(){
    return `<div class="row">
    <div class="d-flex justify-content-center">
        <div class="box-grid m-5">
            <table class="table table-bordered border-3 m-0">
                <thead>
                    <tr class="bg-secondary">
                    <th colspan="3">Events statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Events with highest percentage of attendance</td>
                        <td>Events with lowest percentage of attendance</td>
                        <td>Event with larger capacity</td>
                    </tr>
                    <tr>
                        <td><p>${maximaAsistencia()}</p></td>
                        <td><P>${minimaAsistencia()}</P></td>
                        <td><P>${mayorCapacidad()}</P></td>
                    </tr>
                </tbody>
                </table>
                <table class="table table-bordered border-3 m-0">
                <thead>
                    <tr class="bg-secondary">
                        <th colspan="3">Upcoming events statistics by category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Categories</td>
                        <td>Revenues</td>
                        <td>Percentage of attendance</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
                <table class="table table-bordered border-3">
                <thead>
                    <tr class="bg-secondary">
                        <th colspan="3">Past Events statistic by category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Categories</td>
                        <td>Revenues</td>
                        <td>Percentage of attendance</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`
}

//Mayor asistencia
function maximaAsistencia (){
    let maxAsistencia = [];

    for (let asistencia of data.events){
        if (asistencia.assistance != undefined){
            maxAsistencia.push(asistencia.assistance);
        }    
    }
    return (Math.max(...maxAsistencia));

    


    /* ${Object.keys(event)[8].charAt(0).toUpperCase() + Object.keys(event)[8].slice(1)}:</b> ${Object.values(event)[8]} */

/* if(!(Object.keys(eventsData.events[index])[8] == "estimate") */
    
// let arrayEventos = data.events;

   
    
    // arrayEventos.filter(e => {
    //     let filtroNombre = e.assistance.includes(resultado);

    //     return arrayEventos.name;

    // }
    // )
    // console.log(arrayEventos.name);
}


//Menor Asistencia 
function minimaAsistencia(){
    let minAsistencia = [];

for (let asistencia of data.events){
    if (asistencia.assistance != undefined){
        minAsistencia.push(asistencia.assistance);
    }    
}
return (Math.min(...minAsistencia));
}

//Mayor capacidad

function mayorCapacidad(){

    let mayorCapacidad = [];
    
    for (let asistencia of data.events){
        if (asistencia.capacity != undefined){
            mayorCapacidad.push(asistencia.capacity);
        }    
    }
    return (Math.max(...mayorCapacidad));
}


