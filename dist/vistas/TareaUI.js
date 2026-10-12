"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaUI = void 0;
class TareaUI {
    contenedorLista;
    formulario;
    constructor() {
        this.contenedorLista = document.getElementById('lista-tareas');
        this.formulario = document.getElementById('form-tarea');
    }
    vincularAgregar(manejador) {
        this.formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            const inputTitulo = document.getElementById('titulo');
            const inputDesc = document.getElementById('descripcion');
            if (inputTitulo.value && inputDesc.value) {
                manejador(inputTitulo.value, inputDesc.value);
                this.formulario.reset();
            }
        });
    }
    vincularEliminar(manejador) {
        this.contenedorLista.addEventListener('click', (evento) => {
            const elemento = evento.target;
            if (elemento.classList.contains('btn-eliminar')) {
                const id = elemento.parentElement.dataset.id;
                if (confirm('¿Eliminar esta tarea definitivamente?')) {
                    manejador(id);
                }
            }
        });
    }
    vincularCompletar(manejador) {
        this.contenedorLista.addEventListener('change', (evento) => {
            const elemento = evento.target;
            if (elemento.type === 'checkbox') {
                const id = elemento.parentElement.dataset.id;
                manejador(id);
            }
        });
    }
    mostrarTareas(tareas) {
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
exports.TareaUI = TareaUI;
