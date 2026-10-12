import { ITarea, TareaModel } from '../modelos/TareaModel.js';
import { TareaUI } from '../vistas/TareaUI.js';
import { StorageHelper } from '../utilidades/StorageHelper.js';

export class AppController {
    private arregloTareas: ITarea[];

    constructor(
        private ui: TareaUI,
        private storage: StorageHelper<ITarea>
    ) {
        this.arregloTareas = this.storage.obtenerDatos();
        
        // Conectando la vista con los métodos de este controlador
        this.ui.vincularAgregar(this.agregarNuevaTarea.bind(this));
        this.ui.vincularEliminar(this.borrarTarea.bind(this));
        this.ui.vincularCompletar(this.cambiarEstado.bind(this));

        // Carga inicial
        this.ui.mostrarTareas(this.arregloTareas);
    }

    agregarNuevaTarea(titulo: string, descripcion: string) {
        // Usamos la fecha actual como ID único para no depender de librerías externas
        const nuevoId = new Date().getTime().toString(); 
        const nuevaTarea = new TareaModel(nuevoId, titulo, descripcion);
        
        this.arregloTareas.push(nuevaTarea);
        this.storage.guardarDatos(this.arregloTareas);
        this.ui.mostrarTareas(this.arregloTareas);
    }

    borrarTarea(id: string) {
        this.arregloTareas = this.arregloTareas.filter(t => t.id !== id);
        this.storage.guardarDatos(this.arregloTareas);
        this.ui.mostrarTareas(this.arregloTareas);
    }

    cambiarEstado(id: string) {
        const tareaEncontrada = this.arregloTareas.find(t => t.id === id);
        if (tareaEncontrada) {
            tareaEncontrada.completada = !tareaEncontrada.completada;
            this.storage.guardarDatos(this.arregloTareas);
            this.ui.mostrarTareas(this.arregloTareas);
        }
    }
}