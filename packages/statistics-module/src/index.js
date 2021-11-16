const { StatisticModel } = require('./entities');
const { StatisticUseCases } = require('./useCases');

module.exports = {
  addStatistic: StatisticUseCases.addStatistic({ model: StatisticModel }),
  getClicksByLinkId: StatisticUseCases.getClicksByLinkId({ model: StatisticModel }),
};
