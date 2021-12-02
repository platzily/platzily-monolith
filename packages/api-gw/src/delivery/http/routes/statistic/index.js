const { statistic } = require('../../../../adapters');
const schema = require('./schema');

async function router(fastify) {
  fastify.post('/', { schema }, statistic.add);
}

module.exports = router;
