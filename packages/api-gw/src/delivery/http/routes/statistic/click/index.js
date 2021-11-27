const { statistic } = require('../../../../../adapters');

async function router(fastify) {
  fastify.post('/', {}, statistic.getGlobalClicks);
}

module.exports = router;
