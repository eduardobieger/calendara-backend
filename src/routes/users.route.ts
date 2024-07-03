import { FastifyInstance } from "fastify";
import UsersController from "../controllers/users.controller.js";

export default async function usersRoute(fastify: FastifyInstance) {
  fastify.post("/createUser", async (request, reply) => {
    await UsersController.createUser(fastify, request, reply);
  });
}
