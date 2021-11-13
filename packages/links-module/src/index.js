const { nanoid } = require('nanoid');

const { LinkModel, CampaignModel } = require('./entities');
const { LinkUseCases, CampaignUseCases } = require('./useCases');

module.exports = {
  createShortUrl: LinkUseCases.createShortURL({
    model: LinkModel,
    idGenerator: { generate: nanoid }
  }),
  readUrlByHash: LinkUseCases.readUrlByHash({ model: LinkModel }),
  createCampaign: CampaignUseCases.createCampaign({
    model: CampaignModel
  })
}