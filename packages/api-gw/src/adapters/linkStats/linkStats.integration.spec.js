const fastify = require("fastify");
const linkStats = require("./linkStats");
const Faker = require("faker");
const linkStatsRouterSchema = require("../../delivery/http/routes/linkStats/schema");

describe("Suite Link Adapters", () => {
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

  describe("/linkStats", () => {
    it("Post: Given an body request with data of link, then a object with the data of userId and linkId are returned", async () => {
      // Arrange
      const userIdExpected = Faker.random.number();
      const linkIdExpected = Faker.random.uuid();

      const linkStatsStub = {
        addStatistic: jest.fn((userId, linkId) =>
          Promise.resolve({ userId, linkId })
        ),
      };
      const addStatisticMock = linkStats.addStatistic.bind({
        linkStatsAdapter: linkStatsStub,
      });
      server.post(
        "/linkStats",
        { schema: linkStatsRouterSchema },
        addStatisticMock
      );

      // Act
      await server.ready();
      const response = await server.inject({
        method: "POST",
        url: "/linkStats",
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

      console.log(response.json().data);

      // Asserts
      expect(response.statusCode).toEqual(201);
      expect(response.json().data.userId.userId).toEqual(userIdExpected); //esto hay que arreglarlo
      expect(response.json().data.userId.linkId).toEqual(linkIdExpected); //esto hay que arreglarlo
      expect(response.headers["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(typeof response.json().data).toEqual("object");
    });
  });
});
