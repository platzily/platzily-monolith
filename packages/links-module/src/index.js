const { nanoid } = require('nanoid');

const { LinkModel } = require('./entities');
const { LinkUseCases } = require('./useCases');

module.exports = {
  createShortUrl: LinkUseCases.createShortURL({
    model: LinkModel,
    idGenerator: { generate: nanoid }
  }),
  getLinksByUser: LinkUseCases.getLinksByUser({ model: LinkModel }),
  readUrlByHash: LinkUseCases.readUrlByHash({ model: LinkModel }),
}
