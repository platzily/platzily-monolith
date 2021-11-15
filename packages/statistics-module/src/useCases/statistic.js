const addStatistic = ({ model }) => async ({
  userId, linkId, metric, context,
}) => {
  const addedStatistic = await model.create({
    userId, linkId, metric, context,
  });

  return addedStatistic;
};

module.exports = { addStatistic };
