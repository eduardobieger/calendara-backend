import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import UsersService from "../services/users.service.js";

const UsersController = {
  async createUser(
    fastify: FastifyInstance,
    request: FastifyRequest,
    reply: FastifyReply,
  ) {
    const { username, email, password } = request.body as {
      username: string;
      email: string;
      password: string;
    };

    try {
      const user = await UsersService.createUser(
        fastify,
        username,
        email,
        password,
      );
      reply.code(201).send(user);
    } catch (err) {
      fastify.log.error(err);
      reply.code(500).send({ message: "Internal Server Error" });
    }
  },
};

export default UsersController;
