const {user} = require('../../../../adapters');
const schema = require('./schema')

async function userRouter(fastify) {
	fastify.post('/', { schema }, user.createUser);
}

module.exports = userRouter;
