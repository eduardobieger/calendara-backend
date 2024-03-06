const bcrypt = require("bcrypt");

async function authenticate(fastify, request, reply) {
  const { username, email, password, displayName } = request.body;

  try {
    const result = await fastify.pg.query("SELECT * FROM users_table WHERE username = $1", [username]);

    const dbUser = result.rows[0];

    const match = await bcrypt.compare(password, dbUser.password);

    if (match) {
      const token = fastify.jwt.sign(dbUser);
      return reply
        .code(200)
        .setCookie("token", token, {
          path: "/",
          httpOnly: false,
          secure: false,
          expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          sameSite: "lax",
        })
        .send({ message: "Logged in." });
    } else {
      return reply.code(401).send({ error: "Invalid username or password" });
    }
  } catch (err) {
    fastify.log.error(err);
    return reply.code(500).send({ error: err.message });
  }
}

module.exports = authenticate;

