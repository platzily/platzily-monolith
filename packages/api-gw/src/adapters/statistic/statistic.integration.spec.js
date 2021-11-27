const fastify = require('fastify');
const Faker = require('faker');
const statistic = require('./statistic');
const { addStatisticSchema } = require('../../delivery/http/routes/statistic/schema');

describe('Suite Link Adapters', () => {
  let server;

  beforeEach(async () => {
    server = fastify({});
  });

  afterEach(async () => {
    if (server) {
      await server.close();
      server = null;
    }
  });

  describe('/statistic', () => {
    it('Post: Given an body request with data of link, then a object with the data of userId and linkId are returned', async () => {
      // Arrange
      const userIdExpected = Faker.random.number();
      const linkIdExpected = Faker.random.uuid();

      const statisticStub = {
        addStatistic: jest.fn((userId, linkId) => Promise.resolve({ userId, linkId })),
      };
      const addStatisticMock = statistic.addStatistic.bind({
        statisticAdapter: statisticStub,
      });
      server.post(
        '/statistic',
        { addStatisticSchema },
        addStatisticMock,
      );

      // Act
      await server.ready();
      const response = await server.inject({
        method: 'POST',
        url: '/statistic',
        body: {
          userId: userIdExpected,
          linkId: linkIdExpected,
          browser: Faker.random.word(),
          location: Faker.random.number(),
          ip: Faker.internet.ip(),
          device: Faker.random.word(),
          date: Faker.date.recent(),
        },
      });

      // eslint-disable-next-line no-console
      console.log(response.json().data);

      // Asserts
      expect(response.statusCode).toEqual(201);
      expect(response.json().data.userId.userId).toEqual(userIdExpected); // esto hay que arreglarlo
      expect(response.json().data.userId.linkId).toEqual(linkIdExpected); // esto hay que arreglarlo
      expect(response.headers['content-type']).toEqual(
        'application/json; charset=utf-8',
      );
      expect(typeof response.json().data).toEqual('object');
    });
  });
});
