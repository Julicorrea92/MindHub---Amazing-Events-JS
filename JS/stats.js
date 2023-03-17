function mostrarTabla(data){
    let mostrarTabla = document.getElementById('tablaCompleta');
    mostrarTabla.innerHTML += dibujarTablas();
}


//Estadísticas de eventos: evento con mayor porcentaje de asistencia,
// evento con menor porcentaje de asistencia, evento con mayor capacidad.


maximaAsistencia();


minimaAsistencia();


mayorCapacidad();


let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
    
async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        // console.log(response);
        // throw new Error("no se pudo obtener la data");
        const data = await response.json();
        console.log(data);
        // crearLista(data.events);
        
        mostrarTabla(data);
        cargarCategoriasHtml(data);
       
        
        
    } catch(error) {
        console.log(error)
    }
}
getEventsData(urlApi);



