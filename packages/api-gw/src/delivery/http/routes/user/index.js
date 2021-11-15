const { user } = require('../../../../adapters');

async function userRouter(fastify) {
	fastify.get('/',
        { querystring: {
            email: { type: 'string' }
        } 
    } ,user.getUser);
}

module.exports = userRouter;