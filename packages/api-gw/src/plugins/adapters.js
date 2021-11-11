const LinkUseCases = require('@platzily/links-module');
const UserUseCases = require('@platzily/users-module');
const fp = require('fastify-plugin');


async function adapters(fastify) {
  await fastify.decorate('linkAdapter', LinkUseCases);
  await fastify.decorate('userAdapter', UserUseCases);
}

module.exports = fp(adapters);
