const assert = require('assert');
const environment = require('../config/environment');

const config = {
    DB_HOST: process.env[`${environment}DB_HOST`],
    DB_USER: process.env[`${environment}DB_USER`],
    DB_PASSWORD: process.env[`${environment}DB_PASSWORD`],
    DB_NAME: process.env[`${environment}DB_NAME`]
}

assert(config.DB_HOST, 'DB_HOST must be provided');
assert(config.DB_USER, 'DB_USER must be provided');
assert(config.DB_PASSWORD, 'DB_PASSWORD must be provided');
assert(config.DB_NAME, 'DB_NAME must be provided');


module.exports = {
    client: 'mysql2',
    connection: {
        host: config.DB_HOST,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME
    }
}

