const dotenv = require('dotenv');
const { supportedEnvs } = require('../src/utils/constants');
const { join } = require('path')

let environment;
let path;
const env = '.env';

switch (process.env.NODE_ENV) {
  case supportedEnvs.PRODUCTION: {
    environment = '';
    path = `/src/${env}`;
    break;
  }
  default: {
    environment = 'DEV_';
    path = `${join(__dirname, '../../..')}/${env}`;

    break;
  }
}

dotenv.config({ path });

module.exports = environment;
