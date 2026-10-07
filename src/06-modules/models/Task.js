export default class Task {
    constructor(titulo) {
        this.titulo = titulo;
        this._completada = false;
    }

    get completada() {
        return this._completada;
    }

    completar() {
        this._completada = true;
    }

};