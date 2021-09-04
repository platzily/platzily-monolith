async function addStatistic(req, reply) {
  const { userId, linkId } = req.body;

  req.log.info(`Saving statistic link ${linkId} for user ${userId}`);

  const response = await this.linkStatsAdapter.addStatistic({ userId, linkId });

  return reply.code(201)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: response });
}


module.exports = {
  addStatistic
};