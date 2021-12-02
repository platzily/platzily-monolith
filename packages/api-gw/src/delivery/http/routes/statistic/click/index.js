const { statistic } = require('../../../../../adapters');

async function router(fastify) {
  fastify.get('/', {}, statistic.getGlobalClicks);
}

module.exports = router;
