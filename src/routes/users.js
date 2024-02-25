const usersPostController = require("../controllers/usersPostController");
const usersGetAllController = require("../controllers/usersGetAllController");

async function users(fastify, options) {
  fastify.get("/users", async (request, reply) => {
    return await usersGetAllController(fastify, request, reply);
  });

  fastify.post("/users", async (request, reply) => {
    return await usersPostController(fastify, request, reply);
  });
}

module.exports = users;
