import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyPostgres from "@fastify/postgres";
import {
  postgresqlUsername,
  postgresqlPassword,
  postgresqlHost,
  postgresqlDatabase,
  bcryptSaltRounds,
} from "./config/env.js";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

// registro dos plugins
fastify.register(fastifyCors, {
  origin: true,
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Content-Type",
  credentials: true,
});

fastify.register(fastifyPostgres, {
  connectionString: `postgres://${postgresqlUsername}:${postgresqlPassword}@${postgresqlHost}/${postgresqlDatabase}`,
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
