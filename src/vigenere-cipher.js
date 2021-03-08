const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  type = false;
  constructor(type){
      this.type = type ===false
  }
  encrypt(message,key) {
 
    let i = 0;
    key = key.toLowerCase();
    message = message.toLowerCase();

    if(this.type){
     message = message.split('').reverse().join('');
    }


      message = [...message].map((value,index)=>{

        if((value.charCodeAt(0) - 97) >= 0 && value.charCodeAt(0) - 97 <= 26){
            if(i >= key.length){
                i = 0;
            }
            let count = (value.charCodeAt(0)-97) + (key[i++].charCodeAt(0) - 97)
            return count >= 26 ? String.fromCharCode(count - 26 + 97) : String.fromCharCode(count + 97);
        }
  
        return value;
    })
    if(this.type)
    return message.reverse().join('').toUpperCase()
      else
      return message.join('').toUpperCase()

  
  }

  decrypt(message,key) {
    let i = 0;
    key = key.toLowerCase();
    message = message.toLowerCase();
      message = [...message].map((value,index)=>{
        if((value.charCodeAt(0) - 97) >= 0 && value.charCodeAt(0) - 97 <= 26){
            if(i >= key.length){
                i = 0;
            }
            let count = (value.charCodeAt(0) - 97)  - (key[i++].charCodeAt(0) - 97) 
            return count < 0 ? String.fromCharCode(count + 26 + 97) : String.fromCharCode(count + 97);
        }
  
        return value;
    })
    return message.join('').toUpperCase()
  
  }

}

module.exports = VigenereCipheringMachine;
