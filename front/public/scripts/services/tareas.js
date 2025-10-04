import { api } from "./api.js";

const baseUrl = "personas/:id/tarea";

const getAll = async function () {
  return api.get(baseUrl);
};

const create = async function (id_tarea, titulo) {
  return api.post(baseUrl, { id_tarea, titulo});
};


const getById = async function (id_tarea) {
  return api.get(baseUrl + id_tarea);
};

const erase = async function (id_tarea) {
  await api.delete(baseUrl + id_tarea);
};

const personService = {
  getAll,
  create,
  getById,
  erase,
};

export default personService;
