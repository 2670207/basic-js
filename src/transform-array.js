const CustomError = require("../extensions/custom-error");

module.exports = function transform(input) {
  if(!Array.isArray(input)) throw 'Error';

  let result = [];
  let action = ['--discard-next','--double-prev','--double-next','--discard-prev'];

  for(let index = 0; input.length > index; ++index){

    let lateralStart =  (index == 0);
    let lateralEnd =  (index + 1 === input.length);

    let preventValue = input[index - 1]
    let currentValue = input[index];
    let nextValue = input[index + 1];
    let isDoublePreventDiscardNext = input[index - 2] == '--discard-next';

    let isNextAction = action.includes(input[index + 2])

    if(nextValue === '--discard-prev'){
      continue;
    }
   // console.log(index,'->', input[index], 'next =>', nextValue);
    result.push(input[index]);

    switch(input[index]){
     // case (nextValue && nextValue === '--discard-prev'):
     //   console.log('----');
     //     index++;
     //   break;
      case '--discard-next':
        
        index++;
     //   console.log(input[index],index,'s');
        break;
      case '--double-prev':
          if(!isDoublePreventDiscardNext &&  !lateralStart){
            //console.log(preventValue,'+');
              result.push(preventValue);
          }
        break;
      case '--double-next':
          if(!lateralEnd)
            result.push(nextValue);
        break;        
    }

  }
  
  result =  result.filter((value) =>{  return ! action.includes(value)});
 // console.log(result,'my');
  return result;
};
