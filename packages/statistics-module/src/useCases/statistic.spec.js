const Faker = require('faker');
const StatisticUseCases = require('./statistic');

describe('Statistic Use Cases', () => {
  describe('addStatistic', () => {
    it('Given a valid userId and linkId, then the function must return a created statistic', async () => {
      // Arrange
      const userId = Faker.random.number();
      const linkId = Faker.random.uuid();
      const metric = {
        name: 'clicks',
        description: 'clicks by link',
      };
      const context = 'link';

      const statisticObjectModel = {
        _id: Faker.random.uuid(),
        userId,
        linkId,
        metric,
        context,
      };

      const dependencies = {
        model: { create: jest.fn(() => Promise.resolve(statisticObjectModel)) },
      };
      // Act
      const addStatisticBuilder = StatisticUseCases.addStatistic(dependencies);
      const addStatistic = await addStatisticBuilder({
        userId, linkId, metric, context,
      });
      // Assert
      expect(addStatistic).toBe(statisticObjectModel);
      expect(dependencies.model.create).toHaveBeenCalledWith({
        userId, linkId, metric, context,
      });
    });
  });
});
