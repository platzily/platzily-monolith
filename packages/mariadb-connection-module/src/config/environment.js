const dotenv = require('dotenv');
const { supportedEnvs } = require('../utils/constants');
const path = require('path')
let environment;

let pathEnv;
const env = '.env';

switch (process.env.NODE_ENV) {
  case supportedEnvs.PRODUCTION: {
    environment = '';
    pathEnv = path.resolve(__dirname,'../../',env);
    break;
  }
  default: {
    environment = 'DEV_';
    pathEnv = path.resolve(__dirname,'../../',env);
    break;
  }
}

dotenv.config({ path: pathEnv });

module.exports = environment;
