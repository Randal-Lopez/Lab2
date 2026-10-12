"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const TareaModel_js_1 = require("../modelos/TareaModel.js");
class AppController {
    ui;
    storage;
    arregloTareas;
    constructor(ui, storage) {
        this.ui = ui;
        this.storage = storage;
        this.arregloTareas = this.storage.obtenerDatos();
        // Conectando la vista con los métodos de este controlador
        this.ui.vincularAgregar(this.agregarNuevaTarea.bind(this));
        this.ui.vincularEliminar(this.borrarTarea.bind(this));
        this.ui.vincularCompletar(this.cambiarEstado.bind(this));
        // Carga inicial
        this.ui.mostrarTareas(this.arregloTareas);
    }
    agregarNuevaTarea(titulo, descripcion) {
        // Usamos la fecha actual como ID único para no depender de librerías externas
        const nuevoId = new Date().getTime().toString();
        const nuevaTarea = new TareaModel_js_1.TareaModel(nuevoId, titulo, descripcion);
        this.arregloTareas.push(nuevaTarea);
        this.storage.guardarDatos(this.arregloTareas);
        this.ui.mostrarTareas(this.arregloTareas);
    }
    borrarTarea(id) {
        this.arregloTareas = this.arregloTareas.filter(t => t.id !== id);
        this.storage.guardarDatos(this.arregloTareas);
        this.ui.mostrarTareas(this.arregloTareas);
    }
    cambiarEstado(id) {
        const tareaEncontrada = this.arregloTareas.find(t => t.id === id);
        if (tareaEncontrada) {
            tareaEncontrada.completada = !tareaEncontrada.completada;
            this.storage.guardarDatos(this.arregloTareas);
            this.ui.mostrarTareas(this.arregloTareas);
        }
    }
}
exports.AppController = AppController;
