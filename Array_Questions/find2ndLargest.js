let arr = [1, 2, 5, 3, 8, 10, 12];

const secondLargest = (arr) => {
  let max = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > max) {
      secondLargest = max;
      max = num;
    } else if (num > secondLargest && num !== max) {
      secondLargest = num;
    }
  }
  return secondLargest;
};
console.log("2nd largest element", secondLargest(arr));
