const { StatisticModel } = require("./model/index.js");
const { StatisticUseCases } = require("./useCases/index.js");

module.exports = {
  addStatistic: StatisticUseCases.addStatistic({
    model: StatisticModel,
  }),
};