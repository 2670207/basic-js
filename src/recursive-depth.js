const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  depth = 0;
  save(level){
      this.depth = level === 1 ? level : this.depth > level ? this.depth : level;
  }
  calculateDepth(array,level = 1) {
      this.save(level);
          array.forEach(element => {
              if(Array.isArray(element)){
                  this.calculateDepth(element,level + 1);
              }
          });
      return this.depth; 
  }
};