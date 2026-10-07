//Ejercicio 1
console.log("Ejercicio 1");

import * as constantes from "./constants.js";

console.log(constantes.APP_NAME);
console.log(constantes.VERSION);
console.log(constantes.AUTOR);



//Ejercicio 2
console.log("Ejercicio 2");

import * as operaciones from "./operations.js";

console.log(operaciones.sumar(10, 5));
console.log(operaciones.restar(10, 5));
console.log(operaciones.multiplicar(10, 5));
console.log(operaciones.dividir(10, 5));
console.log(operaciones.dividir(10, 0));

//Ejercicio 3
console.log("Ejercicio 3");

import saludo from "./greetings.js";

saludo("Victor");


//Ejercicio 4
console.log("Ejercicio 4");

import primero, { SEPARADOR, mayusculas } from "./utils.js";

console.log(SEPARADOR);
console.log("victor");
console.log(mayusculas("victor"));
console.log(primero("Uno; Dos; Tres"));


//Ejercicio 5
console.log("Ejercicio 5");

import { circulo, cuadrado } from "./math.js";

console.log(circulo(5).toFixed(2));
console.log(cuadrado(4));



//Ejercicio 6
console.log("Ejercicio 6");

import * as personas from "./people.js";

console.log(Object.values(personas));


//Ejercicio 7
console.log("Ejercicio 7");

//exercises.js:4 Uncaught SyntaxError: Cannot use import statement outside a module (at exercises.js:4:1)
//exercises.js:64 Uncaught SyntaxError: The requested module './operations.js' does not provide an export named 'default' (at exercises.js:64:8)



//Ejercicio 8
console.log("Ejercicio 8");

import { validarEmail, validarTelefono } from "./validators/index.js";

console.log(validarEmail("paco@hotmail.com"));
console.log(validarTelefono("+3454678234"));


//Reto
console.log("Reto");

import * as servicio from "./services/tasks.js";

servicio.agregar("Tarea 1");
servicio.agregar("Tarea 2");
servicio.agregar("Tarea 3");
servicio.completar("Tarea 2");
let array = servicio.pendientes();
console.log("Pendientes: " + array.length);
array.map(x => console.log("- " + x.titulo));

let array2 = servicio.listar();
array2.push("Extra");
console.log("Pendientes: " + array.length);
array.map(x => console.log("- " + x.titulo));
