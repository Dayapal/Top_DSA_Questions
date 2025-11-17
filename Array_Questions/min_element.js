let arr = [5, 9, 3, 15, 7];
// let max = Math.min(...arr)
// console.log(max)

const bruteForce = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
  }
  return min;
};
const optimizeMinElement = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min) min = arr[i]
  }
  return min;
};

console.log("brute for result", bruteForce(arr));
console.log("brute for result", optimizeMinElement(arr));
