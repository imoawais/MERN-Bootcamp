let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(arr) {
  let frequency = {};
  let max = 0;
  let result;
  
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    frequency[item] = frequency[item] ? frequency[item] + 1 : 1;
    
    if (frequency[item] > max) {
      max = frequency[item];
      result = item;
    }
  }
  
  return result;
}

let mostFrequentItem = mostFrequent(arr);
console.log("Most frequent item: " + mostFrequentItem);
