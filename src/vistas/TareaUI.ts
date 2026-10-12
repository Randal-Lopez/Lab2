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
            
            if (inputTitulo.value && inputDesc.value) {
                manejador(inputTitulo.value, inputDesc.value);
                this.formulario.reset();
            }
        });
    }

    vincularEliminar(manejador: (id: string) => void) {
        this.contenedorLista.addEventListener('click', (evento) => {
            const elemento = evento.target as HTMLElement;
            if (elemento.classList.contains('btn-eliminar')) {
                const id = elemento.parentElement!.dataset.id!;
                if(confirm('¿Eliminar esta tarea definitivamente?')) {
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

    mostrarTareas(tareas: ITarea[]) {
        this.contenedorLista.innerHTML = '';
        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.dataset.id = tarea.id;
            li.innerHTML = `
                <input type="checkbox" ${tarea.completada ? 'checked' : ''}>
                <span style="${tarea.completada ? 'text-decoration: line-through' : ''}">
                    <strong>${tarea.titulo}</strong>: ${tarea.descripcion}
                </span>
                <button class="btn-eliminar">Borrar</button>
            `;
            this.contenedorLista.appendChild(li);
        });
    }
}