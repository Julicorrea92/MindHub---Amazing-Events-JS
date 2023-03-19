function mostrarTabla(data){
    let mostrarTabla = document.getElementById('tablaCompleta');
    mostrarTabla.innerHTML += dibujarTablas(dibujarTablas);
}

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

let events = [];
    
async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        console.log(data);
              
        mostrarTabla(data);
        traerPorcentajeAsistencia(data);
        maximaCapacidad(data);
              
        
    } catch(error) {
        console.log(error)
    }
}
getEventsData(urlApi);