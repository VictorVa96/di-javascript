export const PI = 3.1416;

export function suma(a, b) {
    return a + b;
}

export function resta(a, b) {
    return a - b;
}

export class Calculadora {
    static multiplicar(a, b) {
        return a * b;
    }
}

function areaCirculo(radio) {
    return PI * Math.pow(radio, 2);
}

function areaCuadrado(lado) {

    return lado * lado;

}

export { areaCirculo as circulo, areaCuadrado as cuadrado };