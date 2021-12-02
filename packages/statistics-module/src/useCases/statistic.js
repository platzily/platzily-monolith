const {
  validators, logger, BusinessError,
} = require('../utils');
const { errorTypes } = require('../utils/constants');

const addStatistic = ({ model }) => async ({
  userId, linkId, metric, context,
}) => {
  if (!validators.isValidUserId(userId)) {
    logger.error('[pl-statistic-module: The userId provided is not valid');

    throw new BusinessError(errorTypes.USER_ID_NOT_VALID, 'statistic-module');
  }

  if (!validators.isValidLinkId(linkId)) {
    logger.error('[pl-statistic-module]: The linkId provided is not valid');

    throw new BusinessError(errorTypes.LINK_ID_NOT_VALID, 'statistic-module');
  }

  if (!validators.isValidMetric(metric)) {
    logger.error(['pl-statistic-module: The metric provided is not valid']);

    throw new BusinessError(errorTypes.METRIC_NOT_VALID, 'statistic-module');
  }

  if (!validators.isValidContext(context)) {
    logger.error(['pl-statistic-module: The context provided is not valid']);

    throw new BusinessError(errorTypes.CONTEXT_NOT_VALID, 'statistic-module');
  }

  logger.info(`[pl-statistic-module]: Adding statistic for link id ${linkId} of user id ${userId} to metric ${metric.name} with description ${metric.description} in context ${context}`);

  let addedStatistic;
  try {
    addedStatistic = await model.create({
      userId, linkId, metric, context,
    });
  } catch (error) {
    logger.error('[pl-statistic-module]: Error creating statistic: ', error.message);

    throw new BusinessError(errorTypes.WRITE_DATABASE_ERROR, 'statistic-module');
  }

  return addedStatistic;
};

const getClicksByLinkId = ({ model }) => async ({
  linkId,
}) => {
  if (!validators.isValidLinkId(linkId)) {
    logger.error('[pl-statistic-module]: The linkId provided is not valid');

    throw new BusinessError(errorTypes.LINK_ID_NOT_VALID, 'statistic-module');
  }

  logger.info(`[pl-statistic-module]: Counting clicks of link id ${linkId}`);

  let countedClicksByLinkId;
  try {
    countedClicksByLinkId = await model.find({ linkId }).count();
  } catch (error) {
    logger.error('[pl-statistic-module]: Error getting counting clicks of link id: ', error.message);

    throw new BusinessError(errorTypes.READ_DATABASE_ERROR, 'statistic-module');
  }

  return countedClicksByLinkId;
};
const getGlobalClicks = ({ model }) => async () => {
  logger.info('[pl-statistic-module]: Counting Global Clicks');

  let countedGlobalClicks;
  try {
    countedGlobalClicks = await model.find().count();
  } catch (error) {
    logger.error('[pl-statistic-module]: Error getting counting global clicks: ', error.message);
    throw new BusinessError(errorTypes.READ_DATABASE_ERROR, 'statistic-module');
  }

  return countedGlobalClicks;
};

module.exports = { addStatistic, getClicksByLinkId, getGlobalClicks };
