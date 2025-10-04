import {
  Type,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";
import { Tarea } from "../../../../model/tarea_model.ts";
import { createTarea, deleteTareaById, findTareaById, } from "../../../../services/tareas.ts";
import { ErrorSchema } from "../../../../model/errors.ts";



const personasRoutes: FastifyPluginAsyncTypebox = async function (fastify) {
  //TODO:
    fastify.get(
      "/",
      {
        schema: {
          tags: ["Tareas"],
          params: Type.Pick(Tarea, ["id_tarea"]),
          response: {
            200: Tarea,
          },
        },
      },
      async function (req, rep) {
        return findTareaById(req.params.id_tarea);
      }
    );
/*
tuve un problema con el async y no sabia como solucionarlo 

*/
    fastify.post(
      "/",
      {
        schema: {
          tags: ["Tareas"],
          body: Type.Pick(Tarea, ["id_persona","id_tarea","titulo"], {
            examples: [
              {
                titulo: "cocinar"
              },
            ],
          }),
          response: {
            201: Tarea,
            400: ErrorSchema,
          },
        },
        onRequest: [fastify.checkIsAdmin],
      }, async function (req, rep) {
        rep.code(201);
        return createTarea(req.body.id_persona, req.body.titulo);
      }
    );

    fastify.delete(
      "/",
      {
        schema: {
          tags: ["Tareas"],
          params: Type.Pick(Tarea, ["id_tarea"]),
          response: {
            204: Type.Null(),
          },
        },
      },
      async function (req, rep) {
        rep.code(204);
        return deleteTareaById(req.params.id_tarea);
      }
    );
};

export default personasRoutes;
