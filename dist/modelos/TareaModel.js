"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaModel = void 0;
class TareaModel {
    id;
    titulo;
    descripcion;
    completada;
    constructor(id, titulo, descripcion, completada = false) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
    }
}
exports.TareaModel = TareaModel;
