import { TareaModel } from '../modelos/TareaModel.js';
export class AppController {
    constructor(ui, storage) {
        this.ui = ui;
        this.storage = storage;
        this.textoBusqueda = '';
        this.estadoFiltro = 'todas';
        this.arregloTareas = this.storage.obtenerDatos();
        this.ui.vincularAgregar(this.agregarNuevaTarea.bind(this));
        this.ui.vincularEliminar(this.borrarTarea.bind(this));
        this.ui.vincularCompletar(this.cambiarEstado.bind(this));
        this.ui.vincularBuscar(this.buscarTareas.bind(this));
        this.ui.vincularFiltrar(this.filtrarTareas.bind(this));
        this.mostrarTareas();
    }
    agregarNuevaTarea(titulo, descripcion) {
        const nuevoId = new Date().getTime().toString();
        const nuevaTarea = new TareaModel(nuevoId, titulo, descripcion);
        this.arregloTareas.push(nuevaTarea);
        this.storage.guardarDatos(this.arregloTareas);
        this.mostrarTareas();
    }
    borrarTarea(id) {
        this.arregloTareas = this.arregloTareas.filter(t => t.id !== id);
        this.storage.guardarDatos(this.arregloTareas);
        this.mostrarTareas();
    }
    cambiarEstado(id) {
        const tareaEncontrada = this.arregloTareas.find(t => t.id === id);
        if (tareaEncontrada) {
            tareaEncontrada.completada = !tareaEncontrada.completada;
            this.storage.guardarDatos(this.arregloTareas);
            this.mostrarTareas();
        }
    }
    buscarTareas(texto) {
        this.textoBusqueda = texto;
        this.mostrarTareas();
    }
    filtrarTareas(estado) {
        this.estadoFiltro = estado;
        this.mostrarTareas();
    }
    mostrarTareas() {
        let resultado = this.arregloTareas;
        if (this.estadoFiltro === 'pendientes') {
            resultado = resultado.filter(t => !t.completada);
        }
        else if (this.estadoFiltro === 'completadas') {
            resultado = resultado.filter(t => t.completada);
        }
        if (this.textoBusqueda.trim() !== '') {
            resultado = resultado.filter(t => t.titulo.toLowerCase().includes(this.textoBusqueda.toLowerCase()));
        }
        this.ui.mostrarTareas(resultado);
    }
}
