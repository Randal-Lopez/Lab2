import { TareaUI } from './vistas/TareaUI.js';
import { AppController } from './controladores/AppController.js';
import { StorageHelper } from './utilidades/StorageHelper.js';
import { ITarea } from './modelos/TareaModel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Almacenamiento local con clave personalizada
    const dbHelper = new StorageHelper<ITarea>('mis_tareas_lab2');
    const interfaz = new TareaUI();
    const aplicacion = new AppController(interfaz, dbHelper);
});