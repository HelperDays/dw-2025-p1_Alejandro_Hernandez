import { mostrarLogin } from "./dom/dom-auth.js";
import { mostrarListarUsuarios } from "./dom/dom-person.js";
import { hayToken } from "./services/api.js";
import { menuMisTareasElement } from "./dom/dom-tarea.js";

if (!hayToken()) mostrarLogin();
else mostrarListarUsuarios();

//instanc