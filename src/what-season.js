const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(!date) return 'Unable to determine the time of year!';

  if(date instanceof Date && !isNaN(date.valueOf())){
    const monthSeason = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];
      return monthSeason[date.getMonth()];
  }else{
        throw 'invalid argument';
  }
  
};