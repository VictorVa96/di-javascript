export function validarTelefono(tel) {
    return /^\+?\d{9,15}$/.test(tel);
}