//Inyección de todas las tarjetas 

// todasLasTarjetas()
let todasLasTarjetas = "";
  
for (let event of data.events) {
  todasLasTarjetas += traerTarjeta(event);
}

let tarjeta = document.getElementById('tarjeta');
tarjeta.innerHTML = todasLasTarjetas;

 //Pasar search y procesarlo

let search = document.querySelector('form');
search.addEventListener('submit', e => {
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
    document.getElementById('tarjeta').innerHTML = mostrarFiltrados;
  }
  else {
    // alert('The search returned no results, please try again.');
    tarjeta.innerHTML = '<p>The search returned no results, please try again.</p>'
  }
}
);

//Inyección de categorías

cargarCategoriasHtml()

//Captura de clicks

let clickCategoria = document.querySelectorAll('input[type=checkbox]');
let clickado = [];


//Captura de clicks en los checkboxes

clickCategoria.forEach(checkbox => {
  checkbox.addEventListener('click', e => {
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


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ABAJO PROCESOS

// //for (let clickCategoria of capturaCheck){

//  clickCategoria.forEach(checkbox =>{
//     checkbox.addEventListener('click', e =>{
//       if (e.target.checked){
//         clickado.push(e.target.value); //Hasta acá hago que me guarde en el array de clickado los valores
//       } else {
//         let i = clickado.indexOf(e.target.value); //Acá guardo en la variable i el numero que corresponde al indice del array para operarlo
//         if (i > -1) {
//           clickado.splice(i, 1); //Si acá el indice del array cuyo value cargado con anterioridad me indica un valor mayor a -1, se le aplica el método slice a i para eliminar 1 elemento
//         }
//       } 
//       console.log(clickado);
//       if (clickado.length >0) {
//         let filtrados = data.events.filter(e => {
//           for (let categoria of clickado) {
//             if (e.category.includes(categoria)) {
//               return true;
//             }
//           }
//         });

//       let mostrarFiltrados = '';
//       for (let filtro of filtrados) {
//         mostrarFiltrados += traerTarjeta(filtro);
//       }
//       tarjeta.innerHTML = mostrarFiltrados;
//     }
//     else {
//       tarjeta.innerHTML = todasLasTarjetas; 
//     }
//   })
// }); 
    
   

      let mostrarFiltrados = '';
      for (let filtro of filtrados) {
        mostrarFiltrados += traerTarjeta(filtro);
      }
      tarjeta.innerHTML = mostrarFiltrados;
    } else {
      tarjeta.innerHTML = todasLasTarjetas; //Inyectar todas las tarjetas de nuevo
    }
  });
}); */

  //Queda armar el metodo para que vuelva la pagina a mostrar las tarjetas iniciales en cada página y reducción de código 

  

     /* let checkString ="";
      if (clickado.filter(e=>{
        e.target.value.includes(clickado)
      })
      ){
        checkString += traerTarjeta(clickado.indexOf())
      } */

      //return (e.name.toLowerCase().includes(texto)) || (e.description.toLowerCase().includes(texto));



/*let stringTexto = texto.trim().toLowerCase();
let traerNombre = data.events.filter(tipo => tipo.name.toLowerCase().includes(stringTexto));
let traerDescripcion = data.events.filter(tipo => tipo.description.toLowerCase().includes(stringTexto));
//Estas dos variables son arrays de objetos filtrados que se generan si stringTexto pasa el filtro */


/* let mostrarNombre = "";

for (let filtro of traerNombre) {
mostrarNombre += traerTarjeta(filtro);
}
if (traerNombre.length > 0) {
document.getElementById('tarjeta').innerHTML = mostrarNombre;
}
else {alert('The search returned no results, please try again.')
}


let mostrarDescripcion = "";

for (let filtro of traerDescripcion) {
mostrarDescripcion += traerTarjeta(filtro);
}

if (traerDescripcion.length > 0) {
document.getElementById('tarjeta').innerHTML = mostrarDescripcion;
}
else {alert('The search returned no results, please try again.')
}
}
); */

//Acá quedaba armado pero me sobrescribia 



/* let filtrados = traerDescripcion.concat(traerNombre);
// console.log(filtrados);
// Acá unifico los 2 arrays generados para armar un unico repetidor

let mostrarFiltrados = "";

for (let filtro of filtrados) {
mostrarFiltrados += traerTarjeta(filtro);
}
if (filtrados.length > 0) {
document.getElementById('tarjeta').innerHTML = mostrarFiltrados;
}
else alert('The search returned no results, please try again.');*/
 

//Esto funcionaba a medias, si bien achicaba todo a un solo for, me traia mas de una tarjeta al estar concateando a un solo array