'use-strict'; 

// TODO 

const StatisticRepository = require('../../domain/StatisticRepository');

module.exports = class MongoStatisticRepository extends StatisticRepository{
  constructor(statisticModel){
    super(statisticModel)
  }

  async add (userId, linkId){  
    const addedStatistic = await this.statisticModel.create(userId, linkId);
  }
}