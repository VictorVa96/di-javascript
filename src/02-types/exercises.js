//Ejercicio 1
console.log("Ejercicio 1");


let nombre = "Victor"
let edad = 27
let varon = true
let incognito
let vacio = null

console.log(nombre + " " + typeof nombre);
console.log(edad + " " + typeof edad);
console.log(varon + " " + typeof varon);
console.log(incognito + " " + typeof incognito);
console.log(vacio + " " + typeof vacio);

//Ejercicio 2

console.log("Ejercicio 2");

let numero1 = Number("42")
let numero2 = String(42)

console.log(numero1 + " " + typeof numero1);

console.log(numero2 + " " + typeof numero2);


//Ejercicio 3

console.log("Ejercicio 3");

const persona = { nombre: "Victor", edad: 27, ciudad: "Sama" };
persona.nombre = "Daniel";
persona["ciudad"] = "LaViana";
persona.profesion = "Estudiante";
console.table(persona);




//Ejercicio 4

console.log("Ejercicio 4");

let numeros = [1, 2, 3, 4, 5];
console.log(numeros + " " + typeof numeros);
console.log(numeros + " " + Array.isArray(numeros));

//Ejercicio 5

console.log("Ejercicio 5");

console.log(typeof null); //object
console.log(typeof []); //object
console.log(typeof (() => { })); //function
console.log(null === undefined); //false
console.log(null == undefined); //true


//Ejercicio 6

console.log("Ejercicio 6");

const a = { x: 1 }; //a es un objecto con la propiedad x, inicializada a 1
const b = a; //b apunta al mismo objeto que a.
b.x = 5; //La propiedad x cambia a 5.
console.log(a.x); //5

let c = 1; //c apunta a primitivo 1
let d = c; //d apunta al mismo valor que c
d = 5; //d ahora apunta a un nuevo valor primitivo
console.log(c); //1

//a.x cambia porque es un objeto mutable, al que a y b apuntan al mismo objecto. c y d tienen valores primitvos, los cuales se
//sobreescriben cuando se asigna un nuevo primitivo.


//Ejercicio 7

console.log("Ejercicio 7");

console.log(Number("hola")); //NaN
console.log(Number("")); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1
console.log(Number("3.14")); //3.14

//Reto

console.log("Reto");

function describir(valor) {
    if (valor === null)
        return "null";
    if (Array.isArray(valor))
        return "array"
    return typeof valor;
}

console.log(describir(null));
console.log(describir([1, 2]));
console.log(describir(() => { }));
console.log(describir({ a: 1 }));
console.log(describir("hola"));
console.log(describir(NaN));
console.log(describir(true));
console.log(describir(undefined));