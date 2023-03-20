let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let events = [];
    
async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        console.log(data);
              
        traerPorcentajeAsistencia(data);
        listaCategorias(data);
        loadPorcentajes(data);
           
                   
        
    } catch(error) {
        console.log(error)
    }
}
getEventsData(urlApi);