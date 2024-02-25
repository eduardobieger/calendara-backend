const env = require("../../config/env");

async function usersGetAllController(fastify, request, reply) {
  try {
    fastify.pg.query(
      "SELECT user_id, username, email, display_name FROM users_table",
      function onResult(err, result) {
        return reply.code(200).send(err | result);
      }
    );
  } catch (err) {
    fastify.log.error(err);
    return reply.code(500).send({ message: err.message });
  }
}

module.exports = usersGetAllController;
