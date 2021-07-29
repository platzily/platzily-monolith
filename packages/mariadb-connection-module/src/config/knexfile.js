const assert = require('assert');
const environment = require('../config/environment')
const { DB_HOST, DB_USER, DB_PASSWORD,DB_NAME} = process.env;

assert(DB_HOST, 'DB_HOST must be provided');
assert(DB_USER, 'DB_USER must be provided');
assert(DB_PASSWORD, 'DB_PASSWORD must be provided');
assert(DB_NAME, 'DB_NAME must be provided');

const maxConnectionPoolSize = process.env.CONNECTION_POOL_SIZE || 10;
const timeout = 30000;

module.exports = {
    client: 'mysql2',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    },
    pool: {
        min: 1,
        max: maxConnectionPoolSize,
        idleTimeoutMillis: timeout,
        createTimeoutMillis: timeout,
        acquireTimeoutMillis: timeout,
    },
    acquireConnectionTimeout: timeout,
    connectionTimeout: timeout
}
