const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
      total += number;
    }
    return total/arr.length;
  }
   
  let ar = [1, 2, 3, 4, 5, 6, 7];
  console.log(arrayAverage(ar));