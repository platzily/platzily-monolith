const { campaign } = require('../../../../adapters');
const schema = require('./schema')

async function CampaignRouter(fastify) {
    fastify.post('/campaign/', schema.postSchema , campaign.createCampaign);
    fastify.get('/campaign/', schema.getSchema, campaign.readAllCampaigns);
    fastify.get('/campaign/:id', schema.getSchema, campaign.readCampaignById);
    fastify.put('/campaign/:id', schema.putSchema, campaign.updateCampaign);
    fastify.delete('/campaign/:id', schema.getSchema, campaign.deleteCampaign);
}

module.exports = CampaignRouter;