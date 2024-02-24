const usersPostController = require("../controllers/usersPostController");

async function users(fastify, options) {
  fastify.get("/users", async (request, reply) => {
    return { users: [] };
  });

  fastify.post("/users", async (request, reply) => {
    await usersPostController(fastify, request);

    return reply.code(201).send({ success: true });
  });
}

module.exports = users;
