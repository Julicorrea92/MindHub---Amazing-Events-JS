//Función comun

function traerTarjeta(event){

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
