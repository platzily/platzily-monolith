const { StatisticModel } = require('./entities');
const { StatisticUseCases } = require('./useCases');

module.exports = {
  addStatistic: StatisticUseCases.addStatistic({ model: StatisticModel }),
};
