export class StorageHelper {
    constructor(clave) {
        this.clave = clave;
    }
    guardarDatos(datos) {
        try {
            localStorage.setItem(this.clave, JSON.stringify(datos));
            console.log('Tareas guardadas correctamente:', datos);
        }
        catch (error) {
            console.error('Error al guardar las tareas:', error);
            alert('No se pudieron guardar las tareas. Revisa la consola del navegador.');
        }
    }
    obtenerDatos() {
        try {
            const datos = localStorage.getItem(this.clave);
            if (!datos) {
                return [];
            }
            return JSON.parse(datos);
        }
        catch (error) {
            console.error('Error al recuperar las tareas:', error);
            return [];
        }
    }
}
