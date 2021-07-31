import { Schema } from "mongoose";
import dbConnection from "../repositories/mongoDB/dbClient.js";

const StatisticSchema = new Schema(
  {
    userId: { type: Number, required: true },
    linkId: { type: Number, required: true },
  },
  { timestamps: true }
);

StatisticSchema.index({ hash: 1 });

export default dbConnection.model("statistic", StatisticSchema);
