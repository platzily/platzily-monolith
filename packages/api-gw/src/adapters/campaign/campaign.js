async function createCampaign(req, reply) {
  const { name, source, medium, tern, content } = req.body;

  const newCampaign = await this.linkAdapter.createCampaign({ name, source, medium, tern, content });

  return reply.code(201)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: newCampaign });
}

module.exports = {
  createCampaign,
}
