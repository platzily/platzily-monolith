const { regexPatterns } = require('./constants');
const logger = require('./logger');

const isValidUserId = (userId) => {
  if (!(typeof userId === 'number')) {
    logger.error('[pl-statistic-module]: user id is not number');

    return false;
  }

  if (!userId) {
    logger.error('[pl-statistic-module]: user id is undefined');

    return false;
  }

  if (!(userId > 0)) {
    logger.error('[pl-statistic-module]: user id less or equal to 0');

    return false;
  }

  return true;
};

const isValidLinkId = (linkId) => {
  if (!regexPatterns.REGEX_OBJECT_ID.test(linkId)) {
    logger.error('[pl-statistic-module]: link id is not valid for object_id pattern');

    return false;
  }

  return true;
};

const isValidMetric = (metric) => {
  const { name, description } = metric;

  if (!(typeof metric === 'object')) {
    logger.error('[pl-statistic-module]: metric is not object');

    return false;
  }

  if (!name || !description) {
    logger.error('[pl-statistic-module]: metric have undefined value(s)');

    return false;
  }

  if (!(name.length > 0) || !(description.length > 0)) {
    logger.error('[pl-statistic-module]: metric have empty value(s)');

    return false;
  }

  return true;
};

const isValidContext = (context) => {
  if (!(typeof context === 'string')) {
    logger.error('[pl-statistic-module]: context is not string');

    return false;
  }

  if (!context) {
    logger.error('[pl-statistic-module]: context is undefined');

    return false;
  }

  if (!(context.length > 0)) {
    logger.error('[pl-statistic-module]: context is empty');

    return false;
  }

  return true;
};

module.exports = {
  isValidUserId,
  isValidLinkId,
  isValidMetric,
  isValidContext,
};
