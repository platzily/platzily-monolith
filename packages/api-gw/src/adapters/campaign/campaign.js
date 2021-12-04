async function createCampaign(req, reply) {
  const { name, source, medium, tern, content } = req.body;

  const newCampaign = await this.campaignService.createCampaign({ name, source, medium, tern, content });

  return reply.code(201)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: newCampaign });
}

async function readCampaignById(req, reply) {
  const { id } = req.params;

  const campaign = await this.campaignService.readCampaignById(id);

  return reply.code(200)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: campaign });
};

async function readAllCampaigns(req, reply) {
  const campaigns = await this.redAllCampaigns();

  return reply.code(200)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: campaigns });
};

async function updateCampaign(req, reply) {
  const { id } = req.params;
  const { name, source, medium, tern, content, isBanned } = req.body;

  const campaign = await this.campaignService.updateCampaign(id, { name, source, medium, tern, content, isBanned });

  return reply.code(200)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: campaign });
};

async function deleteCampaign(req, reply) {
  const { id } = req.params;
v
  const campaign = await this.campaignService.deleteCampaign(id);

  return reply.code(200)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: campaign });
};

module.exports = {
  createCampaign,
  readCampaignById,
  readAllCampaigns,
  updateCampaign,
  deleteCampaign,
}
