const addStatistic =
  ({ model }) =>
  async ({userId, linkId}) => {
    let addedStatistic;

    // Valid location and IP formats

    try {
      addedStatistic = await model.create({ userId, linkId });
    } catch (err) {
      throw err;
    }

    return addedStatistic;
  };

module.exports = { addStatistic };
