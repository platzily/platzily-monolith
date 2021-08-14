module.exports = {
  body: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      linkId: { type: 'number' },
    },
    required: ['userId', 'linkId']
  }
}