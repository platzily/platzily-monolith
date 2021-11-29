const paramsJsonSchema = {
    type: 'object',
    properties: {
        id: { type: 'number'},
    },
    required: ['id'],
};

const bodyJsonSchemna = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        source: { type: 'string'},
        medium: { type: 'string'},
        tern: { type: 'string' },
        content: { type: 'string' }
    },
    required: ['name', 'source', 'medium']
};

const getSchema = {
    params: paramsJsonSchema,
};

const postSchema = {
    body: bodyJsonSchemna,
};

const putSchema = {
    params: paramsJsonSchema,
    body: bodyJsonSchemna,
};

module.exports = {
    getSchema,
    postSchema,
    putSchema
};