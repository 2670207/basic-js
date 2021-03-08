const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {

  if(!Array.isArray(members)) return false;
  
   return members.map(value =>  typeof value == 'string' ? value.trim().charAt(0).toUpperCase() : '').sort().join('');
  };