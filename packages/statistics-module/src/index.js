import { StatisticModel } from "./model/index.js";
import { StatisticUseCases } from "./useCases/index.js";

export default {
  addStatistic: StatisticUseCases.addStatistic({
    model: StatisticModel,
  }),
};
