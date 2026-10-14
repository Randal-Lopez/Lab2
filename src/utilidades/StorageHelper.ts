export class StorageHelper<T> {
    private clave: string;

    constructor(clave: string) {
        this.clave = clave;
    }

    guardarDatos(datos: T[]): void {
        try {
            localStorage.setItem(this.clave, JSON.stringify(datos));
            console.log('Tareas guardadas correctamente:', datos);
        } catch (error) {
            console.error('Error al guardar las tareas:', error);
            alert('No se pudieron guardar las tareas. Revisa la consola del navegador.');
        }
    }

    obtenerDatos(): T[] {
        try {
            const datos = localStorage.getItem(this.clave);

            if (!datos) {
                return [];
            }

            return JSON.parse(datos) as T[];
        } catch (error) {
            console.error('Error al recuperar las tareas:', error);
            return [];
        }
    }
}