import {
  UcuNoEncontrado,
} from "../model/errors.ts";

const listaTareas = [
  {
    id_Tareas : 1,
    id_persona: 3,
    titulo: "Pasear perro",
  },
  {
    id_Tareas : 3,
    id_persona: 3,
    titulo: "Cocinar",
  },
  {
    id_Tareas : 3,
    id_persona: 4,
    titulo: "Ir al gim",
  },
  {
    id_Tareas : 4,
    id_persona: 4,
    titulo: "Bañarse",
  },//agrege los id a las tareas
];

export function findAll() {
  return listaTareas;
}

export const createTarea = async function (id_persona:number ,titulo: string) {
  const id_Tareas = Math.max(...listaTareas.map((u) => u.id_Tareas)) + 1; 
  const nuevaTarea = {id_Tareas,id_persona, titulo };
  listaTareas.push(nuevaTarea);//tengo que agregar una forma que sea solo por su id personal
  return nuevaTarea;
};

export const findTareaById = async function (id: number) {
  return listaTareas.find((u) => u.id_Tareas === id);
};

export const deleteTareaById = async function (id: number) {
  const indice = listaTareas.findIndex((u) => u.id_Tareas === id);
  if (indice < 0) throw new UcuNoEncontrado("");
  listaTareas.splice(indice, 1);
};

