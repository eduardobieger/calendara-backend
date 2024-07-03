import { FastifyInstance } from "fastify";
import UsersRepository from "../repositories/users.repository.js";
import bcrypt from "bcrypt";
import { bcryptSaltRounds } from "../config/env.js";

const UsersService = {
  async createUser(
    fastify: FastifyInstance,
    username: string,
    email: string,
    password: string,
  ) {
    const salt = await bcrypt.genSalt(parseInt(bcryptSaltRounds));
    const hashedPassword = await bcrypt.hash(password, salt);

    return await UsersRepository.createUser(
      fastify,
      username,
      email,
      hashedPassword,
    );
  },
};

export default UsersService;
