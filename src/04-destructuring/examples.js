const persona = { nombre: "Laura", edad: 25, estudiante: true };

const { nombre, edad, estudiante } = persona;
console.log(nombre);     // "Laura"
console.log(edad);        // 25
console.log(estudiante);  // true

const producto = { nombre: "Teclado", precio: 49.99 };

const { nombre: nombreProducto, precio: precioFinal } = producto;
console.log(nombreProducto); // "Teclado"
console.log(precioFinal);    // 49.99

const config = { tema: "oscuro" };

const { tema, idioma = "es", fontSize = 16 } = config;
console.log(tema);     // "oscuro"
console.log(idioma);   // "es"    — valor por defecto
console.log(fontSize); // 16      — valor por defecto

const empresa = {
    nombreEmpresa: "Acme",
    direccion: {
        calle: "Gran Vía 1",
        ciudad: "Madrid",
    },
};

const {
    nombreEmpresa,
    direccion: { calle, ciudad },
} = empresa;

console.log(nombreEmpresa); // "Acme"
console.log(calle);  // "Gran Vía 1"
console.log(ciudad); // "Madrid"

const alumno = { nombreAlumno: "Carlos", edadAlumno: 22, curso: "DAM", nota: 8.5 };

const { nombreAlumno, edadAlumno, ...resto } = alumno;
console.log(nombreAlumno); // "Carlos"
console.log(edadAlumno);   // 22
console.log(resto);  // { curso: "DAM", nota: 8.5 }


const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const [html, css, js, react, node] = tecnologias;
console.log(html);  // "HTML"
console.log(react); // "React"

const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...rest] = numeros;
console.log(primero); // 10
console.log(segundo); // 20
console.log(rest);   // [30, 40, 50]

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

function saludo({ nombre, edad }) {
    return `Hola, ${nombre}. Tienes ${edad} años.`;
}

const personaFuncion = { nombre: "Laura", edad: 25 };
console.log(saludo(personaFuncion));
// "Hola, Laura. Tienes 25 años."

function distanciaAlOrigen([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}

console.log(distanciaAlOrigen([3, 4])); // 5

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = minMax([4, 2, 9, 1, 7]);
console.log(min); // 1
console.log(max); // 9

const respuesta = {
    status: 200,
    datos: {
        usuarios: ["Ana", "Luis", "Marta"],
        total: 3,
    },
};

const {
    status,
    datos: {
        usuarios: [primerote, ...otrosUsuarios],
        total,
    },
} = respuesta;

console.log(status);        // 200
console.log(primerote);       // "Ana"
console.log(otrosUsuarios); // ["Luis", "Marta"]
console.log(total);         // 3