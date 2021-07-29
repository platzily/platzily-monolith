'use strict';
module.exports = (statisticRepository) => {
    const  execute = async (userId, linkId) =>{
       
      const statistic = statisticRepository.add(userId, linkId)
      return (statistic);

    return {
      execute
    }
  }
}