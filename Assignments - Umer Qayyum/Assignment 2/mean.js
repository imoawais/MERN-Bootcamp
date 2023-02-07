const mean = (array) => {
    let sum = 0;
    for (let item of array) {
      sum += item;
    }
    return sum / array.length;
  }
  const numbers = [1, 2, 3, 4, 5];
console.log(mean(numbers));
