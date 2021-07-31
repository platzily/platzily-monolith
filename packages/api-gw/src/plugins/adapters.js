const LinkUseCases = require('@platzily/links-module');
const StatisticLinkUseCases = require('@platzily/statistics-module');

const fp = require('fastify-plugin');

async function adapters(fastify) {
  await fastify.decorate('linkAdapter', LinkUseCases);
  await fastify.decorate('statisticLinkAdapter', StatisticLinkUseCases);
}

module.exports = fp(adapters);
