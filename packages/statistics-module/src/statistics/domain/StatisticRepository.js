
'use strict'; 

module.exports = class StatisticRepository {
  constructor(statisticModel){
    this.statisticModel = statisticModel;
  }
    // Create new Statistic
    add(userId, LinkId){
      return Promise.reject(new Error('Not Implemented'));
    }
    // Add other Statistic Use Case to Extend from other Repository. 
    // ....
 }