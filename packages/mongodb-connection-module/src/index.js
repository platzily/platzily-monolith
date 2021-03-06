const Mongoose = require('mongoose');

const config = require('../config/database');
const logger = require('./utils/logger');

Mongoose.Promise = global.Promise;

const db = Mongoose.createConnection(config.mongodb.uri, {
  useNewUrlParser: true,
  auth: {
    user: config.mongodb.user,
    password: config.mongodb.pass,
  },
});

db.on('error', (err) => {
  logger.error(`[pl-mongodbconnection-module]: Connection error event: ${err.message}`);
  process.exit(1);
});

db.once('open', () => logger.info('[pl-mongodbconnection-module]: Connection openned with the DB'));
db.on('connected', () => logger.info(`[pl-mongodbconnection-module]: Mongoose connection is opened to ${config.mongodb.uri}`));
db.on('disconnected', () => logger.info('[pl-mongodbconnection-module]: Mongoose connection is disconned'));

process.on('SIGINT', () => {
  db.close(() => {
    logger.info('[pl-mongodbconnection-module]: Mongo connection has been disconnected due to application termination');
    process.exit(1);
  });
});

module.exports = db;
