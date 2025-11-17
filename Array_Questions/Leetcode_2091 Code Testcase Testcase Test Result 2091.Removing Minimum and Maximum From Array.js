// Input: nums = [2,10,7,5,4,1,8,6]
// Output: 5
// Explanation:
// The minimum element in the array is nums[5], which is 1.
// The maximum element in the array is nums[1], which is 10.
// We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
// This results in 2 + 3 = 5 deletions, which is the minimum number possible.

let nums = [2, 10, 7, 5, 4, 1, 8, 6];

const minimumDeletsion = (arr) => {
  let n = arr.length;
  if (n === 1) return 1;
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[minIndex]) minIndex = i;
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }
  if (minIndex > maxIndex) {
    let temp = minIndex;
    minIndex = maxIndex;
    maxIndex = temp;
  }
  let frontOnly = maxIndex + 1;
  let backOnly = n - minIndex;
  let bothSides = minIndex + 1 + (n - maxIndex);

  return Math.min(frontOnly, backOnly, bothSides);
};

console.log(minimumDeletsion(nums));
