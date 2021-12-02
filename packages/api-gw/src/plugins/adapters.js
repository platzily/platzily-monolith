const LinkUseCases = require('@platzily/links-module');
const StatisticUseCases = require('@platzily/statistics-module');

const fp = require('fastify-plugin');

async function adapters(fastify) {
  await fastify.decorate('linkAdapter', LinkUseCases);
  await fastify.decorate('statisticAdapter', StatisticUseCases);
}

module.exports = fp(adapters);
