console.log("Ejercicio 1");

function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(saludar("Victor"));

console.log("Ejercicio 2");

let sumar = function (a, b) {
    return a + b;
};

console.log("5 + 6 = " + sumar(5, 6));

console.log("Ejercicio 3");

let multiplicar = (a, b) => (a * b);

console.log("5 * 6 = " + multiplicar(5, 6));

console.log("Ejercicio 4");

let esMayorDeEdad = (edad) => (edad >= 18);

console.log("15 años es mayor de dead: " + esMayorDeEdad(15));
console.log("20 años es mayor de dead :" + esMayorDeEdad(20));


console.log("Ejercicio 5");

saludar = function (nombre = "invitado") {
    return "Hola, " + nombre;
};

console.log(saludar("Victor"));
console.log(saludar());

console.log("Ejercicio 6");

let sumarTodos = function (...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }

    return total;
}

console.log(sumarTodos(1, 2, 3));
console.log(sumarTodos(20, 30));
console.log(sumarTodos(60));


console.log("Ejercicio 7");

console.log(cuadrado(3)); //9
function cuadrado(n) {
    return n * n;
}

//console.log(cubo(3)); //UncaughtReferenceError
//const cubo = n => n ** 3;

//Debido a que la función anónima no tiene hoisting, no se eleva la función en el código cuando se llama. Por tanto, a ojos del
//código, la función anonima no existe hasta que se declara e inicializa cubo.

console.log("Ejercicio 8");

function crearContador() {
    const contador = {
        cuenta: 0,
        incrementar: function () { this.cuenta++; },
        valor: function () { console.log(this.cuenta); },
        reiniciar: function () { this.cuenta = 0; }

    }


    return contador;
}

const contador1 = crearContador();
const contador2 = crearContador();
contador1.incrementar();
console.log("Contador1");
contador1.valor();
console.log("Contador2");
contador2.valor();
//Contador 1 y contado 2 referencian distintas estancias del mismo objeto, por lo tanto, sus valores cuenta son independientes.


console.log("Ejercicio 9");

function repetir(fn, veces) {
    for (let i = 0; i < veces; i++) {
        fn();
    }
}

repetir(() => console.log("Repetir"), 5);


console.log("Ejercicio 10");

function multiplicador(factor) {
    return (n) => (n * factor);
}

const doble = multiplicador(2);
const triple = multiplicador(3);

console.log(doble(3));
console.log(triple(3));

console.log(doble(7));
console.log(triple(7));

console.log(doble(15));
console.log(triple(15));


console.log("Reto");



function crearCalculadora() {
    const calculadora = {
        historia: [],
        sumar: function (a, b) {
            let resultado = a + b
            this.historia.push(a + " + " + b + " = " + resultado);
            return resultado;
        },
        restar: function (a, b) {
            let resultado = a - b;
            this.historia.push(a + " - " + b + " = " + resultado);
            return resultado;
        },
        multiplicar: function (a, b) {
            let resultado = a * b;
            this.historia.push(a + " x " + b + " = " + resultado);
            return resultado;
        },
        dividir: function (a, b) {
            let resultado;
            if (b === 0) {
                resultado = "Error: división por cero";
            }
            else {
                resultado = a / b;
            }

            this.historia.push(a + " / " + b + " = " + resultado);
        },
        historial: function () { return this.historia }

    }

    return calculadora;
}

const calc = crearCalculadora();
calc.sumar(3, 4);
calc.multiplicar(2, 5);
calc.dividir(10, 0);
console.log(calc.historial());