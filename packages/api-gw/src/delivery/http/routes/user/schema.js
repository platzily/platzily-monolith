module.exports = {
	body: {
		type: 'object',
		properties: {
			firstname: { type: 'string' },
			lastname: { type: 'string' },
			description: { type: 'string' },
			email: { type: 'string' },
			image: { type: 'string' },
			is_active: { type: 'boolean' },
			reason: { type: 'string' }
		},
		required: ['firstname','email']
	}
}
