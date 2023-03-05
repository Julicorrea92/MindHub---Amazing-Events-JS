//Función html de tarjeta dinámica

function traerTarjeta(event) {

    return `<div class="card my-3 py-2" style="width: 20rem;">
                    <img src="${event.image}" class="" alt="...">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between">
                            <p class="parrafo">${event.price}</p>
                            <a href="Details.html" class="btn btn-danger">Ver Más</a>
                        </div>
                    </div>
                </div>
            </div>`;
}

//Función html para filtrado de checkbox

function filtradoCheck(event){

    return `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="${event.category}">
                <label class="form-check-label" for="inlineCheckbox4">${event.category}</label>
            </div>`;
}

//Función html para search params

function encontrarDetail(event) {
    return `<div class="card" style="width: 20rem; height: 17rem; border: 1px solid;">
                <img src="#" alt="">
            </div>
            <div class="card" style="width: 20rem; border: 1px solid">
                <div class="card-body">
                <h4 class="card-title">Título</h4>
                <h6 class="card-title mb-2 text-muted">Texto Descriptivo</h6>
                <h6 class="card-title mb-2 text-muted">Texto Descriptivo</h6>
                <h6 class="card-title mb-2 text-muted">Texto Descriptivo</h6>
                </div>
            </div>
            </div>`

}

//Pasar search y procesarlo

let search = document.querySelector('form');
search.addEventListener('submit', e => {
    e.preventDefault();
    /* console.log('El evento ingresado se capturó');
    // Hasta acá registra el evento */
    
    let texto = document.querySelector('.form-control').value;
    /* console.log(texto.toString().trim().toLowerCase());
    //Acá pasa texto a string, le quita espacios y deja minúsculas
    */    
    texto.toString().trim().toLowerCase(); 

    let dato = data.events;
    




    tarjeta.innerHTML = "";








})





























/* function filtrar(texto){
    for (let event of data.events) {
        
        if (event.name == texto || event.description == texto) {
            console.log(event);
            traerTarjeta(event);
        }
        else
            alert('No se encuentran resultados. Modifique los filtros');
    }


} */