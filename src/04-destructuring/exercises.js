console.log("Ejercicio 1");

const persona = { nombre: "Victor", edad: 25, ciudad: "Sama" };

const { nombre, edad } = persona;
console.log(nombre);
console.log(edad);

console.log("Ejercicio 2");

const producto = { nombre: "Teclado", precio: 49.99 };

const { nombre: nombreProducto, precio: precioFinal } = producto;
console.log(nombreProducto);
console.log(precioFinal);


console.log("Ejercicio 3");

const config = { tema: "oscuro" };

const { tema, idioma = "es" } = config;
console.log(tema);
console.log(idioma);

console.log("Ejercicio 4");

const fruta = ["manzana", "pera", "platano", "naranja"];
const [fruta1, fruta2, ...rest] = fruta;

console.log(fruta1);
console.log(fruta2);
console.log(rest);


console.log("Ejercicio 5")

let a = 100;
let b = 200;

[a, b] = [b, a];
console.log("a: " + a);
console.log("b: " + b);



console.log("Ejercicio 6")

const colores = ["rojo", ["verde", "azul", "amarillo"]];

const [, [, azul]] = colores;

console.log(azul);


console.log("Ejercicio 7")

function mostrarUsuario({ nombre, rol = "visitante" }) {
    return nombre + "(" + rol + ")";
}

console.log(mostrarUsuario({ nombre: "Ana", rol: "admin" }));
console.log(mostrarUsuario({ nombre: "Luis" }));


console.log("Ejercicio 8")

const respuesta = {
    status: 200,
    datos: {
        usuarios: ["Ana", "Luis", "Marta"],
        total: 3,
    },
};

const { status: statusRespuesta, datos: { usuarios: [usuario1, ...restoUsuarios], total } } = respuesta;
console.log(statusRespuesta);
console.log(usuario1);
console.log(restoUsuarios);
console.log(total);

console.log("Ejercicio 9");

const usuario = { nombre: "Victor", email: "ejemplo@outlook.com", password: "Password" };

const { password, ...usuarioSeguro } = usuario;
console.log(usuario);
console.log(usuarioSeguro);


console.log("Reto")

const pedido1 = {
    cliente: { nombre: "Ana" },
    lineas: ["Teclado", "Ratón", "Monitor"],
    envio: { ciudad: "Oviedo" },
};

const pedido2 = {
    cliente: { nombre: "Luis" },
    lineas: ["Cable"],
};

const pedido3 = {
    cliente: {},
    lineas: [],
};

function resumirPedido({ cliente: { nombre = "Cliente Anónimo" } = {}, lineas = [], envio: { ciudad = "desconocida" } = {} }) {
    return nombre + ": " + lineas.length + " líneas, envío a " + ciudad;

}
console.log(resumirPedido(pedido1));
console.log(resumirPedido(pedido2));
console.log(resumirPedido(pedido3));