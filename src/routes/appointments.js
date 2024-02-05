module.exports = async (fastify, options) => {
    fastify.get("/appointments", async (request, reply) => {
        return { appointments: [] };
    });

    fastify.post("/appointments", async (request, reply) => {
        return { success: true };
    });
}