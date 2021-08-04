const knex = require('knex');
const databaseConfig = require('../src/config/knexfile');
const DB = knex(databaseConfig);
const logger = require('./utils/logger');

DB.raw('select 1+1 as result')
    .then(() => {
        logger.info(`[pl-mongodbconnection-module]: Mongoose connection is opened to ${databaseConfig.connection.host}`)
    })
    .catch(err => {
        logger.error(`[pl-mariadbconnection-module]: Connection error : ${err.message}`);
        process.exit(1)
    })

module.exports = DB;