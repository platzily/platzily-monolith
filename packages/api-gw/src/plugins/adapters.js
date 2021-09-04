const LinkUseCases = require('@platzily/links-module');
const linkStatsUseCases = require('@platzily/statistics-module');

const fp = require('fastify-plugin');

async function adapters(fastify) {
  await fastify.decorate('linkAdapter', LinkUseCases);
  await fastify.decorate('linkStatsAdapter', linkStatsUseCases);
}

module.exports = fp(adapters);
