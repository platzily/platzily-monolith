const { statisticLink } = require('../../../../adapters');
const schema = require('./schema')

async function statisticLinkRouter(fastify) {
  fastify.post('/', { schema }, statisticLink.saveStatistic);
}