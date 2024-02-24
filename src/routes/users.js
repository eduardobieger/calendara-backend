const usersPostController = require("../controllers/usersPostController");

async function users(fastify, options) {
  fastify.get("/users", async (request, reply) => {
    return { users: [] };
  });

  fastify.post("/users", async (request, reply) => {
    return await usersPostController(fastify, request);
  });
}

module.exports = users;
