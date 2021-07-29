// TODO: create the implementation of statistic with the next structure

// id       -> id of table
// linkId   -> id of link
// userId   -> id of user

// the fields must be written in camelCase

module.exports = class Statistic {
  constructor(userId, LinkId){
    this.statisticId = undefined; 
    this.userId=  userId;
    this.LinkId=  LinkId;
  }
};
