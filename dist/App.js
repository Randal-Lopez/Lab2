import { AppController } from './controladores/AppController.js';
import { StorageHelper } from './utilidades/StorageHelper.js';
import { TareaUI } from './vistas/TareaUI.js';
const ui = new TareaUI();
const storage = new StorageHelper('tareas');
new AppController(ui, storage);
