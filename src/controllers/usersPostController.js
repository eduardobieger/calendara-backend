const env = require("../../config/env");
const bcrypt = require("bcrypt");

async function usersPostController(fastify, request, reply) {
  const { username, email, password, displayName } = request.body;

  try {
    const hashedPassword = await bcrypt.hash(password, env.bcryptSaltRounds);

    fastify.pg.query(
      "INSERT INTO users_table(username, password, email, display_name) VALUES($1, $2, $3, $4)",
      [username, hashedPassword, email, displayName]
    );

    return reply.code(201).send({ success: true });
  } catch (err) {
    fastify.log.error(err);
    return reply.code(500).send({ success: false });
  }
}

module.exports = usersPostController;
