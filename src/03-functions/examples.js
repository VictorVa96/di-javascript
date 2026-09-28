function saludar() {
    console.log("¡Hola!");
}

saludar(); // ¡Hola!
saludar(); // ¡Hola!

function sumar(a, b) {
    console.log(a + b);
}

sumar(10, 20); // 30
sumar(3, 7);   // 10


function mostrar(a, b) {
    console.log(a, b);
}

mostrar(1);        // 1 undefined
mostrar(1, 2, 3);  // 1 2  (el 3 se ignora)

function sumarB(a, b) {
    return a + b;
}

const resultado = sumarB(5, 3);
console.log(resultado); // 8
console.log(sumarB(10, 20)); // 30

function crearUsuario(nombre, rol = "visitante") {
    return { nombre, rol };
}

console.log(crearUsuario("Ana"));            // { nombre: "Ana", rol: "visitante" }
console.log(crearUsuario("Luis", "admin"));  // { nombre: "Luis", rol: "admin" }

function sumarTodos(...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }
    return total;
}

console.log(sumarTodos(1, 2, 3));       // 6
console.log(sumarTodos(10, 20, 30, 40)); // 100

function registrar(accion, ...detalles) {
    console.log(`[${accion}]`, detalles.join(", "));
}

registrar("LOGIN", "usuario: ana", "ip: 192.168.1.1");
// [LOGIN] usuario: ana, ip: 192.168.1.1

despedirse(); // "¡Adiós!"

function despedirse() {
    console.log("¡Adiós!");
}

const resta = function (a, b) {
    return a - b;
};

console.log(resta(10, 3)); // 7

const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // 120

const sumarAnon = (a, b) => {
    return a + b;
};

console.log(sumarAnon(4, 6)); // 10

const sumarSinReturn = (a, b) => a + b;
const doble = (n) => n * 2;

console.log(sumarSinReturn(3, 7)); // 10
console.log(doble(5));     // 10

const cuadrado = x => x * x;

console.log(cuadrado(4)); // 16
console.log(cuadrado(9)); // 81

const ahora = () => new Date().toLocaleTimeString();

console.log(ahora());

const crearPunto = (x, y) => ({ x, y });

console.log(crearPunto(3, 7)); // { x: 3, y: 7 }

const equipo = {
    nombre: "Frontend",
    miembros: ["Ana", "Luis", "Marta"],

    listar() {
        this.miembros.forEach((m) => {
            console.log(`${m} pertenece a ${this.nombre}`);
        });
    },
};

equipo.listar();
// Ana pertenece a Frontend
// Luis pertenece a Frontend
// Marta pertenece a Frontend

function ejecutar(fn, a, b) {
    return fn(a, b);
}

const sumarCallBack = (x, y) => x + y;
const multiplicar = (x, y) => x * y;

console.log(ejecutar(sumarCallBack, 3, 4));       // 7
console.log(ejecutar(multiplicar, 3, 4)); // 12

function multiplicador(factor) {
    return (numero) => numero * factor;
}

const doblete = multiplicador(2);
const triple = multiplicador(3);

console.log(doblete(5));  // 10
console.log(triple(5)); // 15

function exterior() {
    const mensaje = "Hola desde exterior";

    function interior() {
        console.log(mensaje);
    }

    interior();
}

exterior(); // "Hola desde exterior"

function crearContador() {
    let cuenta = 0;
    return {
        incrementar: () => ++cuenta,
        valor: () => cuenta,
    };
}

const contador = crearContador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.valor()); // 3

(function () {
    const secreto = 42;
    console.log("Ejecutada inmediatamente", secreto);
})();

// secreto no es accesible aquí

(() => {
    console.log("IIFE con arrow function");
})();

const calcularPrecio = (precio, descuento = 0) => {
    const precioFinal = precio - precio * (descuento / 100);
    return Math.round(precioFinal * 100) / 100;
};

console.log(calcularPrecio(100, 15)); // 85
console.log(calcularPrecio(49.99));   // 49.99
console.log(calcularPrecio(200, 50)); // 100

const usuarios = [
    { nombre: "Ana", edad: 28, activo: true },
    { nombre: "Luis", edad: 17, activo: true },
    { nombre: "Marta", edad: 34, activo: false },
    { nombre: "Carlos", edad: 22, activo: true },
];

const nombresActivosMayores = usuarios
    .filter((u) => u.activo && u.edad >= 18)
    .map((u) => u.nombre);

console.log(nombresActivosMayores); // ["Ana", "Carlos"]

const trim = (s) => s.trim();
const lower = (s) => s.toLowerCase();
const guionizar = (s) => s.replace(/\s+/g, "-");

const slugify = (texto) => guionizar(lower(trim(texto)));

console.log(slugify("  Hola Mundo Cruel  ")); // "hola-mundo-cruel"

const pipe =
    (...fns) =>
        (valor) =>
            fns.reduce((acc, fn) => fn(acc), valor);

const procesarTexto = pipe(trim, lower, guionizar);

console.log(procesarTexto("  Hola Mundo Cruel  ")); // "hola-mundo-cruel"