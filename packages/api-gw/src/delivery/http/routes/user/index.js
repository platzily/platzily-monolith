const { user } = require('../../../../adapters');

async function userRouter(fastify) {
	fastify.get('/', user.getUser);
}

module.exports = userRouter;