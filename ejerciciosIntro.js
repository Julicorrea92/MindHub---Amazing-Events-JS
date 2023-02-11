//Ejercicios js

let miNombre = 'Julian'
console.log(miNombre);

let miApellido = 'Correa'
console.log(miApellido);

let miEdad = 30
console.log(miEdad);

let miMascota = 'Sombra'
console.log(miMascota);

let edadMascota = 2
console.log(edadMascota);

let nombreCompleto = miNombre + ' ' + miApellido;
console.log(nombreCompleto);
console.log("\n");


let textoPresentación = 'Hola! mi nombre es ' + nombreCompleto
+ ' y tengo ' + miEdad + ' años. ' + 'Mi mascota es un gato negro que se llama ' + 
miMascota + ' y tiene ' + edadMascota + ' años.'

console.log(textoPresentación);
console.log("\n");

let sumaEdades = miEdad + edadMascota
console.log('El resultado de la operación es '+ sumaEdades);

let restaEdades = miEdad - edadMascota
console.log('El resultado de la operación es '+ restaEdades);

let productoEdades = miEdad * edadMascota
console.log('El resultado de la operación es '+ productoEdades);

let divisiónEdades = miEdad / edadMascota
console.log('El resultado de la operación es '+ divisiónEdades);
console.log("\n");

// let cargaNombre = prompt('Ingrese su nombre:')
// console.log(cargaNombre);

// let cargaApellido = prompt('Ingrese su apellido:')
// console.log(cargaApellido);

// let cargaEdad = prompt('Ingrese su edad:')
// console.log(cargaEdad);

// let cargaNombreMascota = prompt('Ingrese el nombre de su mascota:')
// console.log(cargaNombreMascota);

// let cargaEdadMascota = prompt('Ingrese la edad de su mascota:')
// console.log(cargaEdadMascota);

let alumno = {
    nombre: 'Julian',
    apellido: 'Correa',
    edad: 30,
    estudiante: true,
    curso:'Bootcamp Frontend'
}

console.table(alumno)
console.log("\n");

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.estudiante);
console.log(alumno.curso);

console.log(alumno);
console.log("\n");

let mascota = {
    nombre: 'Sombra',
    color: 'Negro',
    edad: 2,
    vacunas: true,
    raza: null
}

console.table(mascota)
console.log("\n");

console.log(mascota.nombre);
console.log(mascota.color);
console.log(mascota.edad);
console.log(mascota.vacunas);
console.log(mascota.raza);

console.log(mascota);
console.log("\n");

let frutas = ['banana', 'pera', 'naranja', 'durazno', 'mandarina'];

console.log(frutas);
console.log(frutas [0]);
console.log(frutas [1]);
console.log(frutas [2]);
console.log(frutas [3]);
console.log(frutas [4]);
console.log("\n");

let numeros = [1, 2, 3, 14, 0];

console.log(numeros);
console.log(numeros [0]);
console.log(numeros [1]);
console.log(numeros [2]);
console.log(numeros [3]);
console.log(numeros [4]);
console.log("\n");

let familia = ['mama', 'papa', 'hermana', 'hermano', 'abuelo', 'abuela', 'mascota']

console.log(familia);
console.log(familia [0]);
console.log(familia [1]);
console.log(familia [2]);
console.log(familia [3]);
console.log(familia [4]);
console.log(familia [5]);
console.log(familia [6]);
console.log("\n");

let textoAleatorio = frutas [1] + ' ' + numeros [3] + ' ' + familia [4]
console.log('No me tomen en serio, solo soy una variable de práctica: ' + textoAleatorio + ' :)');
console.log("\n");



