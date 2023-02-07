function processArray(input) {
    let intArray = [];
    let strArray = [];
    let intSum = 0;
    let strConcat = "";
    
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] === 'number' && Number.isInteger(input[i])) {
        intSum = addToIntArray(intSum, input[i]);
        intArray.push(intSum);
      } else if (typeof input[i] === 'string') {
        strConcat = concatToStrArray(strConcat, input[i]);
        strArray.push(strConcat);
      }
    }
    
    return {
      intArray: intArray,
      strArray: strArray
    };
  }
  
  function addToIntArray(prev, curr) {
    return prev + curr;
  }
  
  function concatToStrArray(prev, curr) {
    return prev.concat(curr);
  }
  