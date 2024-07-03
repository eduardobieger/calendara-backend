import { FastifyError, FastifyInstance } from "fastify";

const UsersRepository = {
  async createUser(
    fastify: FastifyInstance,
    username: string,
    email: string,
    hashedPassword: string,
  ) {
    try {
    } catch (err) {
      fastify.log.error((err as FastifyError).message);
    }
  },
};

export default UsersRepository;
