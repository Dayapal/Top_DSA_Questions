let arr = [1, 2, 3, 4, 5];
// output = [5,1,2,3,4]
const rightRoate = (arr) => {
  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
  return arr;
};

console.log("rotate by right 1", rightRoate(arr));
