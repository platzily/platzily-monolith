const { createError } = require('../../utils/errorHandling');

async function getLinksByUser(req, reply) {
  const { userid } = req.query;

  req.log.info(`Searching urls by ${userid}`);

  const result = await this.linkAdapter.getLinksByUser(userid)

  return reply.code(200)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send({ data: result });
}

async function createShortUrl(req, reply) {
  const { url } = req;

  req.log.info(`Creating short url for ${url}`);

  const hostnameUrl = `${req.protocol}://${req.hostname}`;
  const shortUrL = await this.linkAdapter.createShortUrl(url, hostnameUrl);

  return reply.code(201)
      .headers('Content-Type', 'application/json; charset=utf-8')
      .send({ data: shortUrL });
}

async function redirectToUrl(req, reply) {
  const { hash } = req.params;
  req.log.info(`Getting url from ${hash} hash`);
  const link = await this.linkAdapter.readUrlByHash(hash, { _id: 0, originalUrl: 1 });

  if (link) {
    return reply.redirect(link.originalUrl);
  }

  return reply.code(404)
    .headers('Content-Type', 'application/json; charset=utf-8')
    .send(createError({
      statusCode: 404,
      error: "Not found",
      message: "Oops, it looks like this url do not exist anymore"
    }));
}


module.exports = {
  createShortUrl,
  redirectToUrl,
  getLinksByUser
};
