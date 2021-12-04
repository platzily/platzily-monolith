const { nanoid } = require('nanoid');

const { LinkModel, CampaignModel } = require('./entities');
const { LinkUseCases, CampaignUseCases } = require('./useCases');

const link = {
  createShortUrl: LinkUseCases.createShortURL({
    model: LinkModel,
    idGenerator: { generate: nanoid }
  }),
  readUrlByHash: LinkUseCases.readUrlByHash({ model: LinkModel }),
};

const campaign = {
  create: CampaignUseCases.createCampaign({ model: CampaignModel }),
  readById: CampaignUseCases.redCampaignById({ model: CampaignModel }),
  readAll: CampaignUseCases.redAllCampaigns({ model: CampaignModel }),
  update: CampaignUseCases.updateCampaign({ model: CampaignModel }),
  delete: CampaignUseCases.deleteCampaign({ model: CampaignModel }),
};

module.exports = {
  link,
  campaign,
}
