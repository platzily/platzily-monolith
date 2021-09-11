module.exports = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      linkId: { type: 'string' },
      browser: { type: 'string' }, // Optional ?
      location: { type: 'string' }, // Optional ?
      ip: { type: 'string' }, // Optional ? Para que nos sirve?
      device: { type: 'string'} // Optional ?
    },
    required: ['userId', 'linkId']
  }
}