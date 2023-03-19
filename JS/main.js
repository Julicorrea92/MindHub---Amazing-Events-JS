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


function dibujarTablas(data){
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
                        <td>Events with larger capacity</td>
                    </tr>                    
                    <tr>
                        
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
Mayor porcentaje de asistencia: armar una captura de datoscuando la operación de porcentaje entre (asistencia / capacidad)*100
sea la mas alta. Idem para las de mas abajo
*/

function mostrarPorcentajes(events){//revisar plantilla despues
    let container = document.querySelector('tbody');
    let dibujarTablas = '';
    events.forEach(event =>{
        
        let mayorPorcentaje = traerMayorPorcentaje(event);
        let menorPorcentaje = traerMenorPorcentaje(event);
        let mayorCapacidad = traerMayorCapacidad(event);

        dibujarTablas += `<tr>
        <td>${mayorPorcentaje}</td>
        <td>${menorPorcentaje}</td>
        <td>${mayorCapacidad}</td>
    </tr>`;
    
    })
}


function traerPorcentajeAsistencia(data){

    let nombres = [];
    for(let nombre of data.events){
        if(!nombres.includes(nombre.name)&&(nombre.assistance != undefined)){//Acá tome de ejemplo lo armado en un primer planteo 
            nombres.push(nombre.name);                                       //para tomarlo como condición de armado de array nombres
        }
    }
    //Extraigo nombres 

    // console.log(nombres);
    // console.log('\n');
    
    let porcentaje = [];        
    for (let asistencia of data.events){
        if (asistencia.assistance != undefined){
            porcentaje.push((asistencia.assistance)/(asistencia.capacity)*100);
       } 
       //Acá conservo la propiedad de filtrado implicita de evento pasado y al push lo "cargo" ya con la operación hecha
    }
    //console.log(porcentaje);
    console.log('\n');
    //Extraigo porcentaje ya calculado
    
    let porcentajeRedondeado = porcentaje.map(function (num){
        return num.toFixed(2);
    });
    
    // console.log('Porcentajes redondeados');
    // console.log(porcentajeRedondeado);
    

    //Se va armar una variable con un objeto nuevo donde los numeros van a ser propiedad del objeto. Ejemplo en MDN de mozilla
    //La idea es tomar el elemento sort que permite ordenar un objeto nuevo a partir de una de sus propiedades. 


    let valores = nombres.map((name, index) => {
        return { name: name, value: porcentajeRedondeado[index] };
      });

    // console.log('Nuevo Objeto');
    // console.log(valores);

    let valoresOrdenados = valores.sort(function (a, b) {
        if (a.value > b.value) {
          return -1;
        }
        if (a.value < b.value) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });

    //console.log(valoresOrdenados);

    
    let mayorPorcentaje = valoresOrdenados.slice(0, 5);
    console.log(mayorPorcentaje);
    //Muestro la mitad correspondiente a mayor porcentaje

    let menorPorcentaje = valoresOrdenados.slice(13, 18).reverse();
    console.log(menorPorcentaje);
    //Muestro la mitad correspondiente a menor porcentaje

}


function maximaCapacidad(data){

//Tercer columna mayor capacidad queda igual con un math.max
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
 console.log('\n');
 console.log('Evento con mayor capacidad');
 console.log(nombreMayor + ': ' +  mayorCap);  



}



// let cajaDePrueba = nombres.concat(porcentajeMayor);
    // console.log(cajaDePrueba);
    // //Prueba de concatenación junto los dos arrays "pelados"
    
    
    //Tomo la iteración de asistencia para descartar los eventos futuros que son undefined 
    //y de ahi tomo la capacidad que corresponde y hago la operación para obtener el porcentaje   

    // function comparar(a,b){
    //     return b - a;
    // }

    // //Establezco un criterio de comparación para el sort de mayor a menor 
    // //donde b es mayor que a. Sino por definición hacia por orden en Unicode y mezclaba valores.
    // //En un principio puse a-b pero me ordenaba de menor a mayor y luego ponia el
    // //método .reverse() que para el caso funcionaba igual.

   