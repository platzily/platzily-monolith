const knex = require('knex');
const databaseConfig = require('../src/config/knexfile');
const DB = knex(databaseConfig);
module.exports = DB;