let arr = [1, 2, 3, 4, 5];
const builtInmethod = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
};

const averageArray = (arr) => {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / n;
  return average;
};

console.log("Average of All elements", averageArray(arr));
console.log("built in method", builtInmethod(arr));
