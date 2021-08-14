const addStatistic =
  ({ model }) =>
  async ({userId, linkId}) => {
    let addedStatistic;

    console.log('Model: ', model);
    console.log('userId: ', userId);
    console.log('linkId: ', linkId);

    try {
      addedStatistic = await model.create({ userId, linkId });
    } catch (err) {
      throw err;
    }

    return addedStatistic;
  };

module.exports = { addStatistic };
