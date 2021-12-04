const { Schema } = require('mongoose');

const dbConnection = require('../repositories/mongoDB/dbClient');

const CampaignSchema = new Schema({
  name: { type: String, required: true },
  source: { type: String, required: true },
  medium: { type: String, required: true },
  tern: { type: String },
  content: { type: String },
  isBanned: { type: Boolean },
}, { timestamps: true });

CampaignSchema.index({ hash: 1 });

module.exports = dbConnection.model('campaign', CampaignSchema);
