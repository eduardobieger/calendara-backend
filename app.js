const fastify = require("fastify")({
  logger: true,
});
const env = require("./config/env");

// registro dos plugins
fastify.register(require("@fastify/cors"), {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Content-Type",
  credentials: true,
});
fastify.register(require("@fastify/postgres"), {
  connectionString: `postgres://${env.postgresqlUsername}:${env.postgresqlPassword}@${env.postgresqlHost}/${env.postgresqlDatabase}`,
});

// registro das rotas
fastify.register(require("./src/routes/users"));
fastify.register(require("./src/routes/appointments"));

// inicialização do servidor
fastify.listen({ port: 3000, host:"0.0.0.0" }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
