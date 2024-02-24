const env = require("../../config/env");

async function usersPostController(fastify, request) {
  const { username, email, password, displayName } = request.body;

  try {
    fastify.pg.query(
      "INSERT INTO users_table(username, password, email, display_name) VALUES($1, $2, $3, $4)",
      [username, password, email, displayName]
    );
  } catch (err) {
    fastify.log.error(err);
  }
}

module.exports = usersPostController;
