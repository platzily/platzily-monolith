const knex = require('knex');
const databaseConfig = require('../src/config/knexfile');
const logger = require('./utils/logger');

let dbConnection;
try {
    logger.info(`[pl-mariadbconnection-module]: Oppening a db connection to ${databaseConfig.connection.host}`);
    if (!dbConnection) {
        dbConnection = knex(databaseConfig);
    }
} catch(err) {
    logger.error(`[pl-mariadbconnection-module]: Connection error : ${err.message}`);
    process.exit(1);
}
module.exports = {
    dbConnection,
    databaseConfig
};
