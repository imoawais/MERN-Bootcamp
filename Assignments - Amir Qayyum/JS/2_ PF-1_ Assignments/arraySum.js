let numbers = [1, 3, 4, 6, 7];

function sumArray(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

let result = sumArray(numbers);
console.log("Sum of all numbers in the array: " + result);
