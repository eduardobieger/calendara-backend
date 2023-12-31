const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  fastify.register(require("@fastify/postgres"), {
    connectionString: "postgres://postgres@192.168.100.5/calendara-db"
  });

  fastify.get("/users/:id", function (request, reply) {
    fastify.pg.query(
      "SELECT id, username, hash FROM users WHERE id=$1", [request.params.id],
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });
}

module.exports = fastifyPlugin(dbConnector);