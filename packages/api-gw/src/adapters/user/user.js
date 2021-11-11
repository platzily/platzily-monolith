const { createError } = require('../../utils/errorHandling');

async function createUser(req, reply) {
	const initUser = req.body;
	try {
		const user = await this.userAdapter.createUser(initUser);
		req.log.info(`Creating user ${user.email}`);
		return reply.code(201)
			.headers('Content-Type', 'application/json; charset=utf-8')
			.send({ data: user });
	}catch (error) {
		req.log.error(`Fail to create user ${initUser.email} - Reason: ${error}`);
		return reply.code(500)
			.headers('Content-Type', 'application/json; charset=utf-8')
			.send(createError({
				statusCode: 500,
				error: "Error Server",
				message: "Oops, contact with your support team"
			}));
	}

}

module.exports = {
	createUser
};
