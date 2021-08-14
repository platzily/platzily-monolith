const Faker = require('faker');
const statisticLinkAdapters = require('./statisticLink');
const { createReqStub, createReplyStub } = require('../../utils/testUtils');

describe('Statistic Link Adapters' , () => {
  describe('addStatistic' , () => {
    it('Given an userId and linkId in the body, when a statistic link is created then the function must be return it', async () => {
      // Arrange
      const reqStubs = createReqStub({
        body: {
          userId: Faker.random.number(),
          linkId: Faker.random.number()
        }
      });

      const replyStubs = createReplyStub();
      const statisticLinkAdapterStub = {
        addStatistic: jest.fn(),
      }

      // Act
      const addStatisticBinded = statisticLinkAdapters.addStatistic
        .bind({ statisticLinkAdapter: statisticLinkAdapterStub });
      await addStatisticBinded(reqStubs, replyStubs);

      // Asserts
      expect(reqStubs.log.info).toHaveBeenCalled();
      expect(replyStubs.code).toHaveBeenCalledWith(201);
      expect((replyStubs.code()).headers).toHaveBeenCalled();
      expect(((replyStubs.code()).headers()).send).toHaveBeenCalled();
    });
  });
});
