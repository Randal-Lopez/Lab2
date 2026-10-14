Descripción

Proyecto desarrollado en TypeScript para administrar tareas personales mediante una interfaz web sencilla. Permite registrar tareas con título y descripción, controlar su estado y organizar las actividades pendientes y completadas.

Funcionalidades
Registrar tareas con título y descripción.
Buscar tareas por título.
Filtrar tareas según su estado: todas, pendientes o completadas.
Marcar tareas como completadas o pendientes.
Eliminar tareas con confirmación.
Guardar los datos en el almacenamiento local del navegador para conservarlos al recargar la página.
Tecnologías utilizadas
HTML5
CSS3
TypeScript
JavaScript
Node.js y npm
Arquitectura

El proyecto utiliza una estructura basada en el patrón MVC (Modelo-Vista-Controlador), complementada con una clase para gestionar el almacenamiento de los datos:

Modelos: representan la información de las tareas mediante la interfaz ITarea y la clase TareaModel.
Vistas: administran la interfaz y la presentación de las tareas, además de gestionar los eventos del formulario, los botones y los filtros.
Controladores: gestionan las acciones del usuario y conectan la vista con la lógica de la aplicación mediante la clase AppController.
Utilidades: se encargan del almacenamiento y la recuperación de los datos mediante la clase StorageHelper.
Estilos: contienen las reglas CSS para definir la apariencia visual de la aplicación.
Instalación y ejecución
Requisitos previos
Tener instalado Node.js.
Tener instalado Visual Studio Code.
Tener instalada la extensión Live Server en Visual Studio Code.
Pasos para ejecutar el proyecto
Abrir la carpeta del proyecto en Visual Studio Code.

Instalar las dependencias, si corresponde:

npm install

Compilar el código TypeScript:

npx tsc
Abrir el archivo index.html con la extensión Live Server.
Utilizar el formulario para registrar tareas y probar las opciones de búsqueda, filtrado, completado y eliminación.
Almacenamiento de datos

Las tareas se guardan en el almacenamiento local del navegador mediante localStorage. Los datos permanecen disponibles en el mismo navegador y origen, incluso después de recargar la página o cerrar y volver a abrir el navegador.
