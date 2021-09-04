const { linkStats } = require('../../../../adapters');
const schema = require('./schema')

async function linkStatsRouter(fastify) {
  fastify.post('/', { schema }, linkStats.addStatistic);
}

module.exports = linkStatsRouter;