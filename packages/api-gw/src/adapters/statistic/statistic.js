async function addStatistic(req, reply) {
  const { userId, linkId } = req.body;

  req.log.info(`Saving statistic ${linkId} for user ${userId}`);

  const response = await this.statisticAdapter.addStatistic({ userId, linkId });

  return reply
    .code(201)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: response });
}

async function getGlobalClicks(req, reply) {
  // const response = await this.statisticAdapter.getGlobalClicks();

  return reply
    .code(201)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: 'test' });
}

module.exports = {
  addStatistic,
  getGlobalClicks,
};
