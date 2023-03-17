//Inyección de todas las tarjetas 

function todasLasTarjetas(data){

  let todasLasTarjetas = "";
  
  for (let event of data.events) {
    todasLasTarjetas += traerTarjeta(event);
  }
  
  let tarjeta = document.getElementById('tarjeta');
  tarjeta.innerHTML = todasLasTarjetas;


  //Pasar search y procesarlo


let search = document.querySelector('form');
search.addEventListener('submit', e => {
  
  //console.log('Ingreso al evento search');
  e.preventDefault();
  let texto = document.querySelector('.form-control').value.trim().toLowerCase();

  let filtrados = data.events.filter(e => {

    let filtroNombre = e.name.toLowerCase().includes(texto);
    let filtroDescripcion = e.description.toLowerCase().includes(texto)

    return (filtroNombre || filtroDescripcion)
  });

  let mostrarFiltrados = '';
  if (filtrados.length > 0) {
    for (let filtro of filtrados) {
      mostrarFiltrados += traerTarjeta(filtro);
    }
    // let primerosDatos =
   
   document.getElementById('tarjeta').innerHTML = mostrarFiltrados;
  }
  else {
    // alert('The search returned no results, please try again.');
    tarjeta.innerHTML = '<p>The search returned no results, please try again.</p>'
  }
}
);
}

//Captura de clicks

function capturaDeClicks(data){
  let clickCategoria = document.querySelectorAll('input[type=checkbox]');
  let clickado = [];
  
  
  //Captura de clicks en los checkboxes
  
  clickCategoria.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
      //console.log('ingresa al clickeado');
      if (e.target.checked) {
        clickado.push(e.target.value); //Si se chequea el checkbox, agregar su valor al array clickado
      } else {
        let i = clickado.indexOf(e.target.value);
        if (i > -1) {
          clickado.splice(i, 1); //Si se desmarca el checkbox, eliminar su valor del array clickado
        }
      }
      console.log(clickado);
      
      //Si hay checkboxes seleccionados, filtrar por categorías   
  
      if (clickado.length > 0) { 
      let filtradosCategoria = data.events.filter(e => {
          for (let categoria of clickado) {
            if (e.category.includes(categoria)) {
              return true;
            }
          }
        });
        
        //Filtrar los eventos filtrados por texto en caso de que se haya ingresado un valor en el campo de búsqueda
  
        let texto = document.querySelector('.form-control').value.trim().toLowerCase();
        let filtradosTexto = filtradosCategoria.filter(e => {
  
          let filtroNombre = e.name.toLowerCase().includes(texto);
          let filtroDescripcion = e.description.toLowerCase().includes(texto);
  
          return (filtroNombre || filtroDescripcion);
        });
  
        let mostrarFiltrados = '';
        if (filtradosTexto.length > 0) {
          for (let filtro of filtradosTexto) {
            mostrarFiltrados += traerTarjeta(filtro);
          }
          tarjeta.innerHTML = mostrarFiltrados;
        } else {
          tarjeta.innerHTML = 'The search returned no results, please try again.</p>';
        }
      } 
      else { //Si no hay checkboxes seleccionados, filtrar solo por texto
        let texto = document.querySelector('.form-control').value.trim().toLowerCase();
        let filtradosTexto = data.events.filter(e => {
  
          let filtroNombre = e.name.toLowerCase().includes(texto);
          let filtroDescripcion = e.description.toLowerCase().includes(texto);
          
          return (filtroNombre || filtroDescripcion);
        });
  
        let mostrarFiltrados = '';
        if (filtradosTexto.length > 0) {
          for (let filtro of filtradosTexto) {
            mostrarFiltrados += traerTarjeta(filtro);
          }
          tarjeta.innerHTML = mostrarFiltrados;
        } else {
          tarjeta.innerHTML = '<p>The search returned no results, please try again.</p>';
        }
      }
    });
  });
}

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
    
async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        // console.log(response);
        // throw new Error("no se pudo obtener la data");
        const data = await response.json();
        console.log(data);
        // crearLista(data.events);
        
        todasLasTarjetas(data);
        cargarCategoriasHtml(data);
        capturaDeClicks(data);
        
        
    } catch(error) {
        console.log(error)
    }
}
getEventsData(urlApi);





