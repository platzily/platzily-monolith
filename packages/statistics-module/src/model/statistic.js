const { Schema } = require("mongoose");
const dbConnection = require("../repositories/mongoDB/dbClient.js");

const StatisticSchema = new Schema(
  {
    userId: { type: Number, required: true },
    linkId: { type: Number, required: true },
  },
  { timestamps: true }
);

StatisticSchema.index({ hash: 1 });

module.exports = dbConnection.model("statistic", StatisticSchema);
