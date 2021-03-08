const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(activity) {
  
  if(typeof activity !== 'string') return false;

  activity = Number.parseFloat(activity);

  if( Number.isNaN(activity)) return false; 

  if(activity > HALF_LIFE_PERIOD || activity <= 0 || activity > MODERN_ACTIVITY) return false;

  return Math.ceil(Math.abs((Math.log(MODERN_ACTIVITY / activity) / -0.693) * HALF_LIFE_PERIOD));

}; 