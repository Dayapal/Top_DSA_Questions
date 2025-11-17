let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 3, 2, 5];

const checkSortArray1 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

// ----------------------------------------------------------------

const checkSortArray2 = arr =>
    arr.every((num, i) => i === 0 || arr[i - 1] <= num);
// ----------------------------------------------------------------

const checkSortArray = (arr) => {
  let flag = true;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i + 1]) {
      flag = false;
      break;
    }
  }
  return flag
};

console.log("check sorted array", checkSortArray(arr2))
console.log("check sorted array", checkSortArray(arr1))