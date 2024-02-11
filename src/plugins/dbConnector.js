const fastify = require("fastify")();
const env = require("../../config/env");
const fastifyPostgres = require("@fastify/postgres");

async function dbConnector() {
  fastify.register(fastifyPostgres, {
    connectionString: `postgres://${env.postgresqlUsername}:${env.postgresqlPassword}@${env.postgresqlHost}/${env.postgresqlDatabase}`
  });
}

module.exports = dbConnector;