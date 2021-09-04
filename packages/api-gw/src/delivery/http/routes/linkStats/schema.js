module.exports = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      linkId: { type: 'string' },
    },
    required: ['userId', 'linkId']
  }
}