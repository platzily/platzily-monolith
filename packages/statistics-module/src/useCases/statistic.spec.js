/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const Faker = require('faker');
const { BusinessError } = require('../utils');
const { errorTypes } = require('../utils/constants');
const StatisticUseCases = require('./statistic');

describe('Statistic Use Cases', () => {
  describe('addStatistic', () => {
    it('Given a valid userId and linkId, then the function must return a created statistic', async () => {
      // Arrange
      const userId = Faker.random.number();
      const linkId = '507f191e810c19729de860ea';
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
      const addedStatistic = await addStatisticBuilder({
        userId, linkId, metric, context,
      });
      // Assert
      expect(addedStatistic).toBe(statisticObjectModel);
      expect(dependencies.model.create).toHaveBeenCalled();
    });
    it('Given a link id not valid, then the function must return a business error LINK_ID_NOT_VALID', async () => {
      // Arrange
      const linkId = '507g191h810i19729jk860lm';
      const userId = Faker.random.number();
      const metric = {
        name: 'clicks',
        description: 'clicks by link',
      };
      const context = 'link';

      const dependencies = {
        model: {
          create: jest.fn(() => Promise.reject(new BusinessError(errorTypes.LINK_ID_NOT_VALID, 'statistic-module'))),
        },
      };
      // Act
      const addStatisticBuilder = StatisticUseCases.addStatistic(dependencies);
      // Assert
      await expect(addStatisticBuilder({
        userId, linkId, metric, context,
      })).rejects.toThrowError(new BusinessError(errorTypes.LINK_ID_NOT_VALID, 'statistic-module'));
      expect(dependencies.model.create).not.toHaveBeenCalled();
    });
    it('Given a error writing in the model, then the function must return a business error WRITE_DATABASE_ERROR', async () => {
      // Arrange
      const userId = Faker.random.number();
      const linkId = '507f191e810c19729de860ea';
      const metric = {
        name: 'clicks',
        description: 'clicks by link',
      };
      const context = 'link';

      const dependencies = {
        model: {
          create: jest.fn(() => Promise.reject(new BusinessError(errorTypes.WRITE_DATABASE_ERROR, 'statistic-module'))),
        },
      };
      // Act
      const addStatisticBuilder = StatisticUseCases.addStatistic(dependencies);
      // Assert

      await expect(addStatisticBuilder({
        userId, linkId, metric, context,
      })).rejects.toThrowError(new BusinessError(errorTypes.WRITE_DATABASE_ERROR, 'statistic-module'));
      expect(dependencies.model.create).toHaveBeenCalled();
    });
  });
  describe('getClicksByLinkId', () => {
    it('Given a valid link id, then the function must return a count of total clicks by the link id', async () => {
      // Arrange
      const linkId = '507f191e810c19729de860ea';

      const statisticCount = Faker.random.number();

      const dependencies = {
        model: {
          find: jest.fn(({ linkId }) => ({
            count: jest.fn(() => Promise.resolve(statisticCount)),
          })),
        },
      };
      // Act
      const getClicksByLinkIdBuilder = StatisticUseCases.getClicksByLinkId(dependencies);
      const getClicksByLinkId = await getClicksByLinkIdBuilder({
        linkId,
      });
      // Assert
      expect(getClicksByLinkId).toBe(statisticCount);
      expect(dependencies.model.find).toHaveBeenCalledWith({ linkId });
    });
    it('Given a link id not valid, then the function must return a business error LINK_ID_NOT_VALID', async () => {
      // Arrange
      const linkId = '507g191h810i19729jk860lm';

      const dependencies = {
        model: {
          find: jest.fn(({ linkId }) => ({
            count: jest.fn(() => Promise.reject(new BusinessError(errorTypes.LINK_ID_NOT_VALID, 'statistic-module'))),
          })),
        },
      };
      // Act
      const getClicksByLinkIdBuilder = StatisticUseCases.getClicksByLinkId(dependencies);
      // Assert
      await expect(getClicksByLinkIdBuilder({ linkId })).rejects.toThrowError(new BusinessError(errorTypes.LINK_ID_NOT_VALID, 'statistic-module'));
      expect(dependencies.model.find).not.toHaveBeenCalled();
      expect(dependencies.model.find({ linkId }).count).not.toHaveBeenCalled();
    });
    it('Given a error writing in the model, then the function must return a business error READ_DATABASE_ERROR', async () => {
      // Arrange
      const linkId = '507f191e810c19729de860ea';

      const dependencies = {
        model: {
          find: jest.fn(({ linkId }) => ({
            count: jest.fn(() => Promise.reject(new BusinessError(errorTypes.READ_DATABASE_ERROR, 'statistic-module'))),
          })),
        },
      };
      // Act
      const getClicksByLinkIdBuilder = StatisticUseCases.getClicksByLinkId(dependencies);
      // Assert
      await expect(getClicksByLinkIdBuilder({ linkId })).rejects.toThrowError(new BusinessError(errorTypes.READ_DATABASE_ERROR, 'statistic-module'));
      expect(dependencies.model.find).toHaveBeenCalledWith({ linkId });
      expect(dependencies.model.find({ linkId }).count).not.toHaveBeenCalled();
    });
  });

  describe('getGlobalClicks', () => {
    it('The function must return a count of total clicks of platform', async () => {
      // Arrange
      const statisticCount = Faker.random.number();

      const dependencies = {
        model: {
          find: jest.fn(() => ({
            count: jest.fn(() => Promise.resolve(statisticCount)),
          })),
        },
      };
      // Act
      const getGlobalClicksBuilder = StatisticUseCases.getGlobalClicks(dependencies);
      const getClicks = await getGlobalClicksBuilder();
      // Assert
      expect(getClicks).toBe(statisticCount);
      expect(dependencies.model.find).toHaveBeenCalledWith();
    });
    it('Given a error writing in the model, then the function must return a business error READ_DATABASE_ERROR', async () => {
      // Arrange
      const dependencies = {
        model: {
          find: jest.fn(() => ({
            count: jest.fn(() => Promise.reject(new BusinessError(errorTypes.READ_DATABASE_ERROR, 'statistic-module'))),
          })),
        },
      };
      // Act
      const getCountedGlobalClicksBuilder = StatisticUseCases.getGlobalClicks(dependencies);
      // Assert
      await expect(getCountedGlobalClicksBuilder()).rejects.toThrowError(new BusinessError(errorTypes.READ_DATABASE_ERROR, 'statistic-module'));
      expect(dependencies.model.find).toHaveBeenCalledWith();
    });
  });
});
