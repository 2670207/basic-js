const CustomError = require("../extensions/custom-error");

module.exports = function repeater (string, options ) {
 
  options = Object.assign({ separator : '+',   additionSeparator: '|', repeatTimes : 1,  }, options) 

  //options.addition = options.addition  !== undefined ? options.addition : '';
  
  let additionString = function(options){
    result = (new Array(options.additionRepeatTimes)).fill(options.addition + '' ).join(options.additionSeparator); 
    return result === 'undefined' ? '' : result;
  }
  return new Array(options.repeatTimes).fill(string + additionString(options)).join(options.separator )
  
};