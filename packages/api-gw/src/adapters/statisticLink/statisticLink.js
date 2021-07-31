async function saveStatistic(req, reply) {
  const { user_id, link_id } = req.body;

  req.log.info(`Saving statistic link ${link_id} for user ${user_id}`);

  const response = await this.statisticLinkAdapter.saveStatistic({ user_id, link_id });

  return reply.code(201)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: response });
}


module.exports = {
  saveStatistic
};