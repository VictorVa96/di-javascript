const SEPARADOR = ";";
function mayusculas(texto) {
    return texto.toUpperCase();
}

export default function primero(array) {
    return array.split(SEPARADOR)[0];
}


export { SEPARADOR, mayusculas };