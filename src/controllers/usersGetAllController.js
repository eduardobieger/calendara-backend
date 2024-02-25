const env = require("../../config/env");

async function usersGetAllController(fastify, request, reply) {
  try {
    const result = await fastify.pg.query(
      "SELECT user_id, username, email, display_name FROM users_table"
    );

    return reply.code(200).send({ result });
  } catch (err) {
    fastify.log.error(err);
    return reply.code(500).send({ message: err.message });
  }
}

module.exports = usersGetAllController;
