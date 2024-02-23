const fastify = require("fastify")({
  logger: true
});
const env = require("./config/env");

// registro dos plugins de conexão
fastify.register(require("@fastify/postgres"), {
  connectionString: `postgres://${env.postgresqlUsername}:${env.postgresqlPassword}@${postgresqlHost}/${env.postgresqlDatabase}`
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
