const fastify = require("fastify")({
  logger: true
});

fastify.register(require("./routes/index"));
fastify.register(require("./plugins/dbConnector"));

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});