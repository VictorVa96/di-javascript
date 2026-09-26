//Ejercicio 1
console.log("Ejercicio 1")


let nombre = "Victor"
console.log(nombre)
nombre = "Falso"
console.log(nombre)

//Ejercicio 2

console.log("Ejercicio 2")

const PI = 3.1416
console.log(PI)
// PI = 34 Uncaught TypeError

//Ejercicio 3

console.log("Ejercicio 3")

let edad
console.log(edad)
edad = 18
console.log(edad)

//Ejercicio 4

console.log("Ejercicio 4")

let precioBase = 100 //let dado que el precio un valor que cambiara por producto
const iva = 0.21 //const dado que el iva raramente cambia
let precioFinal = precioBase * iva //let dado que su valor es una operacion
console.log(precioFinal)

//Ejercicio 5

console.log("Ejercicio 5")

let x = 1;
{
    let x = 2;
    console.log(x); //2
}
console.log(x); //1

//Ejercicio 6

console.log("Ejercicio 6")

const lista = [1, 2];
lista.push(3);
console.log(lista); // [1,2,3]
//lista = []; Da error debido a que const no permite que se cambie su referencia, solo que se mute lo que almacena

//Ejercicio 7

console.log("Ejercicio 7")

let nombrePersona = "Ana"
let edadPersona = 30
let verdadero = true
let decimal = 1250.5

//Reto

console.log("Reto")

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

//Resultado antes de cambios: 3 3 3
//Resultado despues de cambio: 0 1 2
//Explicacion: Esto se debe a que el bucle for realiza la funcion setTimeout, pero el bucle for es muy rápido. Por lo tanto,
//acaba antes de que el Timeout acabe y se ejecute la funcion. Como var i es global, todos los cambios a i se mantienen,
//y el console.log(i) va a hcer referencia al mismo i, que como ha acabado el bucle, es 3. Con let i, cada ciclo tiene su propia i,
// de manera que el resultado es 0 1 2