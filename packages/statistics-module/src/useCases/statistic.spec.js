import Faker from "faker";
import StatisticUseCases from "./statistic";

describe("Statistic Use Cases", () => {
  describe("addStatistic", () => {
    it("Given a valid userId and linkId, then the function must return a created statistic", () => {
      // Arrange
      const userId = Faker.datatype.number();
      const linkId = Faker.datatype.number();

      const statisticObjectModel = {
        _id: Faker.datatype.uuid(),
        userId,
        linkId,
      };

      const dependencies = {
        model: { create: jest.fn(() => Promise.resolve(statisticObjectModel)) },
      };
      // Act
      const addStatisticBuilder = StatisticUseCases.addStatistic(dependencies);
      const addStatistic = await addStatisticBuilder(userId, linkId);
      // Assert
      expect(addStatistic).toBe(statisticObjectModel);
      expect(dependencies.model.create).toHaveBeenCalledWith({
        userId,
        linkId,
      });
    });
  });
});
