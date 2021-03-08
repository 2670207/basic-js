const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {

    this.chain[this.getLength()] = value;
    
    return this;
  },
  removeLink(position) {
  
    if(!Number.isInteger(position) || position <= 0 || position > this.getLength()){
    
        this.__errors(true);
    }
 
    this.chain.splice(--position,1);
     
    return this; 
  },
  reverseChain() {
    this.chain.reverse();
      return this; 
  },
  finishChain() {
    
    let result = this.chain.map(value => '( ' + value + ' )' ).join('~~');
    this.chain = [];
    return result; 
  },

  __errors(error = false){
    this.chain = [];
      if(error){
        throw 'Error';
      }
  }
};

module.exports = chainMaker;
