"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageHelper = void 0;
class StorageHelper {
    clave;
    constructor(clave) {
        this.clave = clave;
    }
    guardarDatos(datos) {
        localStorage.setItem(this.clave, JSON.stringify(datos));
    }
    obtenerDatos() {
        const datos = localStorage.getItem(this.clave);
        return datos ? JSON.parse(datos) : [];
    }
}
exports.StorageHelper = StorageHelper;
