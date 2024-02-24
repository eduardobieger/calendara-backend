const env = require("../../config/env");

async function usersPostController(fastify, request, reply) {
  const { username, email, password, displayName } = request.body;

  try {
    fastify.pg.query(
      "INSERT INTO users_table(username, password, email, display_name) VALUES($1, crypt($2, gen_salt(bf)), $3, $4)",
      [username, password, email, displayName]
    );

    return reply.code(201).send({ success: true });
  } catch (err) {
    fastify.log.error(err);
    return reply.code(500).send({ success: false });
  }
}

module.exports = usersPostController;
