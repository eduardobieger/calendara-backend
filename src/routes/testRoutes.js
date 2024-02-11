module.exports = async (fastify, options) => {
  fastify.get("/test", async (request, reply) => {
    const { rows } = await fastify.pg.query("SELECT * FROM test_table");
    reply.send(rows);
  })
}