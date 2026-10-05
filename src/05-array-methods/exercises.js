console.log("Ejercicio 1");

const personas = ["Paco", "Alex", "Maria", "Mario", "Alejandra"];
console.log(personas);
personas.push("Extra");
console.log(personas);
personas.shift()
console.log(personas);
console.log("Incluye Extra?: " + personas.includes("Extra"));


console.log("Ejercicio 2");

const numerosOrdenar = [4, 1, 9, 3, 7];
console.log(numerosOrdenar.toSorted());
console.log(numerosOrdenar.toReversed());
console.log(numerosOrdenar);


console.log("Ejercicio 3");

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log("Índice: " + i + ": " + numeros[i]);
}

for (const i of numeros) {
    console.log("Índice: " + i + ": " + numeros[i - 1]);
}

numeros.forEach(numero => console.log("Índice: " + numeros.indexOf(numero) + ": " + numero));


console.log("Ejercicio 4");

const lenguajes = ["HTML", "CSS", "JavaScript", "React"];


for (let i = lenguajes.length - 1; i >= 0; i--) {
    console.log("Posición " + i + " " + lenguajes[i]);
}



console.log("Ejercicio 5");

const nombres = ["Ana", "Luis", "Marta", "Pedro"];

nombres.forEach(nombre => console.log("Hola, " + nombre + "!"));


console.log("Ejercicio 6");

const numbers = [5, 12, 8, 130, 44];
console.log(numbers);
console.log(numbers.filter(num => num > 10));


console.log("Ejercicio 7");

const people = ["Ana", "Alberto", "Bea", "Carlos"];

console.log(people);
const prueba = people.filter(pep => pep[0] === 'A');
console.log(prueba);


console.log("Ejercicio 8");

const cuadra = [1, 2, 3, 4, 5];
console.log(cuadra);
console.log(cuadra.map(num => Math.pow(num, 2)));


console.log("Ejercicio 9");

const mul10 = [10, 20, 30];

console.log(mul10);
console.log(mul10.map(num => num * 1.21));


console.log("Ejercicio 10");

const marcas = ["html", "css", "javascript"];

console.log(marcas);
console.log(marcas.map(mar => mar.toUpperCase()));


console.log("Ejercicio 11");

const nums = [3, 8, 12, 5, 7, 20];

console.log(nums);
console.log(nums.filter(num => num % 2 === 0).map(num => num * 10));

console.log("Ejercicio 12");

const alumnos = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 },
];

alumnos.filter(it => { if (it.nota >= 5) console.log("Alumno aprobado: " + it.nombre) });


console.log("Ejercicio 13");

console.log(alumnos.find(it => it.nota > 8)); //Se usa cuando queremos comprobar si ALGUN alumno saco mas de un ocho
alumnos.filter(it => { if (it.nota < 5) console.log("Alumno suspesdo: " + it.nombre) }); //Se usa para obtener un array que
//cumpla la condición, en este caso, que suspendan.



console.log("Ejercicio 14");

const pedidos = [
    { producto: "Camiseta", precio: 19.99, cantidad: 3 },
    { producto: "Pantalón", precio: 39.5, cantidad: 1 },
    { producto: "Gorra", precio: 12, cantidad: 2 },
];

const suma = pedidos.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
console.log("Suma: " + suma);


console.log("Ejercicio 15");

console.log([10, 1, 21, 2].sort()) // Se debe a que sort no ordena de forma numerica, sino de forma lexicografica, en cuyo caso
//mira el primer digito, si es mayor o menor, y luego el segundo digito.

console.log([10, 1, 21, 2].sort((a, b) => a - b));


console.log("Reto");

const inventario = [
    { nombre: "Teclado", precio: 49.99, stock: 12, categoria: "periféricos" },
    { nombre: "Ratón", precio: 19.99, stock: 0, categoria: "periféricos" },
    { nombre: "Monitor", precio: 199, stock: 4, categoria: "pantallas" },
    { nombre: "Cable HDMI", precio: 8.5, stock: 0, categoria: "cables" },
    { nombre: "Webcam", precio: 59, stock: 7, categoria: "periféricos" },
];

//Punto 1
console.log(inventario.filter(it => it.stock === 0).map(it => it.nombre));

//Punto 2
console.log(inventario.reduce((acc, product) => acc + (product.precio * product.stock), 0));

//Punto 3
console.log(inventario.map(it => it.nombre).toSorted());

//Punto 4
console.log(inventario.map(it => it.categoria).filter((e, i, self) => i === self.indexOf(e)));


//Punto 5
console.log(inventario.reduce((acc, cat) => acc && cat.precio > 0, true) + " " +
    inventario.reduce((acc, cat) => acc || cat.stock === 0, false))


