import tareaService from "../services/tareas.js";
import { mainElement, menuMisTareasElement } from "./dom-main-elements.js";

menuListaUsuariosElement.addEventListener("click", () => {
  mostrarTareas();
});

export async function menuMisTareasElement() {
  try {
    const tarea = await tareaService.getAll();
    const miHtml = `
    <table>
      <thead>
        <tr>
          <th>id_tarea</th>
          <th>titulo</th>
        </tr>
      </thead>
      <tbody>
        ${tarea
          .map(
            (tarea) => `
          <tr>
            <td>${tarea.id_tarea}</td>
            <td>${tarea.titulo}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

    mainElement.innerHTML = miHtml;
  } catch (error) {
    console.error(error.message);
    mainElement.innerHTML = `
      <div id="error-login" class="error-message">${error.message}</div>
    `;
  }
}
