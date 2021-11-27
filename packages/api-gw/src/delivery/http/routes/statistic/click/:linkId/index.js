async function router(fastify) {
  fastify.get('/', async (req, reply) => {
    const { linkId } = req.params;

    return {
      endpoint: 'get global clicks by link id',
      linkId,
    };
  });
}

module.exports = router;
