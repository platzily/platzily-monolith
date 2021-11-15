const { Schema } = require('mongoose');

const dbConnection = require('../repositories/mongoDB/dbClient');

const MetricSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
);

const StatisticSchema = new Schema(
  {
    userId: { type: Number, required: true },
    linkId: { type: String, required: true },
    metric: { type: MetricSchema, required: true },
    context: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

StatisticSchema.index({ hash: 1 });

module.exports = dbConnection.model('statistic', StatisticSchema);
