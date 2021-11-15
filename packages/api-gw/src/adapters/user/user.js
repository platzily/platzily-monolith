async function getUser(req,reply){

    const { email } = req.body;

    req.log.info(`Getting user from email: ${email}`);

    const user = await this.userAdapter.getUser(email);

    return reply.code(200)
        .headers('Content-Type', 'application/json; charset=utf-8')
        .send({ data: user });
}