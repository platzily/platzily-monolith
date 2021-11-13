const {
  logger,
  BusinessError,
  // validators,
  // sanitizers: { errorFieldParser },
  constants: { errorTypes },
} = require("../utils");

const createCampaign = ({ model }) => async (payload) => {
  logger.info(`[pl-campaign-module]: Creating new Campaign ${payload.name}`);

  let newCampaign;
  try {
    newCampaign = await model.create(payload);
  } catch (error) {
    logger.error(
      "[pl-campaign-module]: Error creating new Campaign: ",
      err.message
    );
    throw new BusinessError(
      errorTypes.WRITE_DATABASE_ERROR,
      "campaign-module"
    );
  }

  return newCampaign;
};

const redCampaignById = ({ model }) => async (id) => {
  if (!id) {
    logger.error("[pl-campaign-module]: Error an id parameter is required");
    throw new BusinessError(errorTypes.FIELD_IS_REQUIRED, "campaign-module");
  }

  logger.info("[pl-campaign-module]: Get Campaign by id");

  return model.findById(id).exec();
};

const redAllCampaigns = ({ model }) => async (payload) => {
  // TODO: Paginate
  return model.find({});
};

const updateCampaign = ({ model }) => async (id, payload) => {
  if (!id) {
    logger.error("[pl-campaign-module]: Error an id parameter is required");
    throw new BusinessError(errorTypes.FIELD_IS_REQUIRED, "campaign-module");
  }

  return model.findByIdAndUpdate(id, payload,
    function (err, campaign) {
      if (err) {
        logger.error("[pl-campaign-module]: Error updating Campaign: ", err.message);
        throw new BusinessError(errorTypes.WRITE_DATABASE_ERROR, "campaign-module");
      } else {
        console.log("Updated User : ", campaign);
        return campaign;
      }
    }
  );
};

const deleteCampaign = ({ model }) => async (id) => {
  if (!id) {
    logger.error("[pl-campaign-module]: Error an id parameter is required");
    throw new BusinessError(errorTypes.FIELD_IS_REQUIRED, "campaign-module");
  }

  return model.findByIdAndRemove(id, function (err, campaign) {
    if (err) {
      logger.error("[pl-campaign-module]: Error deleting Campaign: ", err.message);
      throw new BusinessError(errorTypes.WRITE_DATABASE_ERROR, "campaign-module");
    } else {
      return campaign;
    }
  });
};

module.exports = {
  createCampaign,
  redCampaignById,
  redAllCampaigns,
  updateCampaign,
  deleteCampaign,
};
