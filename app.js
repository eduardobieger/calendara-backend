const fastify = require("fastify")({
  logger: true
});
const env = require("./config/env");

// registro dos plugins
fastify.register(require("@fastify/cors"), {
  origin: "*",
  methods: "*",
  allowedHeaders: "*"
});
fastify.register(require("@fastify/postgres"), {
  connectionString: `postgres://${env.postgresqlUsername}:${env.postgresqlPassword}@${env.postgresqlHost}:${env.postgresqlPort}/${env.postgresqlDatabase}`
});

// registro das rotas
fastify.register(require("./src/routes/index.js"));
fastify.register(require("./src/routes/testRoutes"));

// inicialização do servidor
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
