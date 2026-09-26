//Tipos Primitivos

let nombre = "Juan";
let saludo = "Hola";
let mensaje = `Bienvenido ${nombre}`;

let edad = 25;
let pi = 3.1416;
let infinito = Infinity;
let noNumero = NaN; // sigue siendo tipo "number"

let activo = true;
let mayor = false;

let x;
console.log(x); // undefined

let vacio = null;

typeof "hola";        // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object"  ← peculiaridad
typeof Symbol();      // "symbol"
typeof 10n;           // "bigint"
typeof {};            // "object"
typeof [];            // "object"
typeof function () { }; // "function"

//Valores objeto

let persona = { nombre: "Ana", edad: 30 };

let numeros = [1, 2, 3, 4];

function saludar() {
    return "Hola";
}

let hoy = new Date();
let mapa = new Map();
let conjunto = new Set([1, 2, 3]);

let a = 1;
let b = a;
b = 2;
console.log(a); // 1

const o1 = { x: 1 };
const o2 = o1;
o2.x = 2;
console.log(o1.x); // 2 — mismo objeto