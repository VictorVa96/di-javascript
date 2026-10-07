import tarea from "../models/Task.js";

const tareas = []

export function agregar(titulo) {
    tareas.push(new tarea(titulo));

}

export function completar(titulo) {
    tareas.map(x => x.titulo === titulo ? x.completar() : false);

}

export function pendientes() {
    return tareas.filter(x => x.completada === false);

}

export function listar() {

    let lista = [tareas];
    return lista;

}