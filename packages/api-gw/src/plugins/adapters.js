const UseCases = require('@platzily/links-module');

const fp = require('fastify-plugin');

async function adapters(fastify) {
  await fastify.decorate('linkService', UseCases.link);
  await fastify.decorate('campaignService', UseCases.campaign);
}

module.exports = fp(adapters);
