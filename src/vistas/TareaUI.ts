import { ITarea } from '../modelos/TareaModel.js';

export class TareaUI {
    private contenedorLista: HTMLElement;
    private formulario: HTMLFormElement;

    constructor() {
        this.contenedorLista = document.getElementById('lista-tareas')!;
        this.formulario = document.getElementById('form-tarea') as HTMLFormElement;
    }

    vincularAgregar(manejador: (titulo: string, desc: string) => void) {
        this.formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const inputTitulo = document.getElementById('titulo') as HTMLInputElement;
            const inputDesc = document.getElementById('descripcion') as HTMLInputElement;

            if (inputTitulo.value.trim() && inputDesc.value.trim()) {
                manejador(inputTitulo.value.trim(), inputDesc.value.trim());
                this.formulario.reset();
            }
        });
    }

    vincularEliminar(manejador: (id: string) => void) {
        this.contenedorLista.addEventListener('click', (evento) => {
            const elemento = evento.target as HTMLElement;

            if (elemento.classList.contains('btn-eliminar')) {
                const id = elemento.parentElement!.dataset.id!;

                if (confirm('¿Eliminar esta tarea definitivamente?')) {
                    manejador(id);
                }
            }
        });
    }

    vincularCompletar(manejador: (id: string) => void) {
        this.contenedorLista.addEventListener('change', (evento) => {
            const elemento = evento.target as HTMLInputElement;

            if (elemento.type === 'checkbox') {
                const id = elemento.parentElement!.dataset.id!;
                manejador(id);
            }
        });
    }

    vincularBuscar(manejador: (texto: string) => void) {
        const inputBuscar = document.getElementById('buscar') as HTMLInputElement;

        inputBuscar.addEventListener('input', () => {
            manejador(inputBuscar.value);
        });
    }

    vincularFiltrar(manejador: (estado: string) => void) {
        const selector = document.getElementById('filtro-estado') as HTMLSelectElement;

        selector.addEventListener('change', () => {
            manejador(selector.value);
        });
    }

    mostrarTareas(tareas: ITarea[]) {
        this.contenedorLista.innerHTML = '';

        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.dataset.id = tarea.id;

            li.innerHTML = `
                <input type="checkbox" ${tarea.completada ? 'checked' : ''}>

                <span style="${tarea.completada ? 'text-decoration: line-through' : ''}">
                    <strong>${tarea.titulo}</strong>: ${tarea.descripcion}
                    <small>(${tarea.completada ? 'Completada' : 'Pendiente'})</small>
                </span>

                <button class="btn-eliminar">Borrar</button>
            `;

            this.contenedorLista.appendChild(li);
        });
    }
}