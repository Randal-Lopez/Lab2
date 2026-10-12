"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TareaUI_js_1 = require("./vistas/TareaUI.js");
const AppController_js_1 = require("./controladores/AppController.js");
const StorageHelper_js_1 = require("./utilidades/StorageHelper.js");
document.addEventListener('DOMContentLoaded', () => {
    // Almacenamiento local con clave personalizada
    const dbHelper = new StorageHelper_js_1.StorageHelper('mis_tareas_lab2');
    const interfaz = new TareaUI_js_1.TareaUI();
    const aplicacion = new AppController_js_1.AppController(interfaz, dbHelper);
});
