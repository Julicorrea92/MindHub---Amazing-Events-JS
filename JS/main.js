//Función html de tarjeta dinámica

function traerTarjeta(events) {

    return  `<div class="card my-3 py-2" style="width: 20rem;">
                    <img src="${events.image}" class="" alt="...">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${events.name}</h5>
                    <p class="card-text">${events.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between">
                            <p class="parrafo">Precio $${events.price}</p>
                            <a href="Details.html?id=${events._id}" class="btn btn-danger">Ver Más</a>
                        </div>
                    </div>
                </div>
            </div>`;
}

//Función html para filtrado de checkbox

function filtradoCheck(events){

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

function cargarCategoriasHtml(data){

    let arrayCategoria =[];
        for(let events of data.events){
            if(!arrayCategoria.includes(events.category)){
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

//Armar función para lograr la inyección dinámica de tablas

function asistenciaMax(events){
    return `<td><p>${events}</p></td>`
}
function asistenciaMin(events){
    return `<td><p>${events}</p></td>`
}
function capacidadMax(events){
    return `<td><p>${events}</p></td>`
}

function dibujarTablas(data){
    return `<div class="row">
    <div class="d-flex justify-content-center">
        <div class="box-grid m-5">
            <table class="table table-bordered border-3 m-0">
                <thead>
                    <tr class="bg-secondary">
                    <th colspan="3">events statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>events with highest percentage of attendance</td>
                        <td>events with lowest percentage of attendance</td>
                        <td>events with larger capacity</td>
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
                </tbody>
                </table>
                <table class="table table-bordered border-3">
                <thead>
                    <tr class="bg-secondary">
                        <th colspan="3">Past events statistic by category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Categories</td>
                        <td>Revenues</td>
                        <td>Percentage of attendance</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`
}




/* 
Mayor porcentaje de asistencia: armar una captura de datos 
cuando la operación de porcentaje entre (asistencia / capacidad)*100
sea la mas alta. Idem para las de mas abajo
*/

function maximaAsistencia (){

    let maxAsistencia = [];
    
    for (let asistencia of data.events){
        if (asistencia.assistance != undefined){
            maxAsistencia.push(asistencia.assistance);
        }    
    }
   let maximaA = (Math.max(...maxAsistencia));
    
   let nombreMax = '';

    for (let nombre of data.events){
        if(nombre.assistance == maximaA){
            nombreMax = nombre.name;
        }   
    }
    return  nombreMax + ': ' +  maximaA;
}



//Menor Asistencia 
function minimaAsistencia(){
    let minAsistencia = [];

for (let asistencia of data.events){
    if (asistencia.assistance != undefined){
        minAsistencia.push(asistencia.assistance);
    }    
}
let minimaA = (Math.min(...minAsistencia));

    
   let nombreMin = '';

    for (let nombre of data.events){
        if(nombre.assistance == minimaA){
            nombreMin = nombre.name;

        }   
    }
    return  nombreMin + ': ' +  minimaA;

}

//Mayor capacidad

function mayorCapacidad(){

    let mayorCapacidad = [];
    
    for (let asistencia of data.events){
        if (asistencia.capacity != undefined){
            mayorCapacidad.push(asistencia.capacity);
        }    
    }
    let mayorCap = (Math.max(...mayorCapacidad));

    let nombreMayor = '';

    for (let nombre of data.events){
        if(nombre.capacity == mayorCap){
            nombreMayor = nombre.name;
        }   
    }
    return  nombreMayor + ': ' +  mayorCap;
}


