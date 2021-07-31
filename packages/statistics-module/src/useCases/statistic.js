const addStatistic =
  ({ model }) =>
  async (userId, linkId) => {
    let addedStatistic;

    try {
      addedStatistic = await model.create({ userId, linkId });
    } catch (err) {
      throw err;
    }

    return addedStatistic;
  };

export { addStatistic };
