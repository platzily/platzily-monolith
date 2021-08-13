module.exports = {
  body: {
    type: 'object',
    properties: {
      user_id: { type: 'number' },
      link_id: { type: 'number' },
    },
    required: ['user_id', 'link_id']
  }
}