const Faker = require('faker');
const statisticAdapter = require('./statistic');
const { createReqStub, createReplyStub } = require('../../utils/testUtils');

describe('Statistic Adapter', () => {
  describe('addStatistic', () => {
    it('Given an userId and linkId in the body, when a statistic is created then the function must be return it', async () => {
      // Arrange
      const reqStubs = createReqStub({
        body: {
          userId: Faker.random.number(),
          linkId: Faker.random.uuid(),
        },
      });

      const replyStubs = createReplyStub();
      const statisticAdapterStub = {
        addStatistic: jest.fn(),
      };

      // Act
      const addStatisticBinded = statisticAdapter.addStatistic
        .bind({ statisticAdapter: statisticAdapterStub });
      await addStatisticBinded(reqStubs, replyStubs);

      // Asserts
      expect(reqStubs.log.info).toHaveBeenCalled();
      expect(replyStubs.code).toHaveBeenCalledWith(201);
      expect((replyStubs.code()).headers).toHaveBeenCalled();
      expect(((replyStubs.code()).headers()).send).toHaveBeenCalled();
    });
  });
});
