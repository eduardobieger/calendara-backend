const usersPostController = require("../controllers/usersPostController");
const usersGetAllController = require("../controllers/usersGetAllController");
const authenticate = require("../middlewares/authenticate");

async function users(fastify, options) {
  fastify.get("/users", async (request, reply) => {
    return await usersGetAllController(fastify, request, reply);
  });

  fastify.post("/signup", async (request, reply) => {
    return await usersPostController(fastify, request, reply);
  });

  fastify.post("/login", async (request, reply) => {
    return await authenticate(fastify, request, reply);
  });

  fastify.get("/logout", async (request, reply) => {
    reply.clearCookie("token");
  });
}

module.exports = users;
