const dashTwixt2Evens = (number) => {
    let arr = [];
    let temp = number;
    let quotient, remainder;
    while(temp!=0){
      remainder = temp%10;
      temp = Math.floor(temp/10);
      arr.unshift(remainder);
    }

    let indexPosition = [];
    for(let i=0; i<arr.length-1; i++){
      if(arr[i]%2 === 0){
        if(arr[i+1]%2 === 0){
          arr.splice(i+1, 0, "-");
          i=0
        }
      }
    }
    return arr.join("");
  }
  console.log(dashTwixt2Evens(262));