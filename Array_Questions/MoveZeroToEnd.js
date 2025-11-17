let arr = [1, 2, 0, 0, 2, 2, 5, 30, 0, 12];
// output = [1, 2, 2, 2, 5, 30, 12, 0, 0, 0];

// let moveZeroToEnd = arr => arr.filter(n => n !== 0).concat(arr.filter(n => n === 0));

let moveZeroToEnd = (arr) => {
  let zero = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return [...result, ...zero];
};


let moveZeroEnd = (arr) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
          arr[index] = arr[i];
          index++;
        }
    }
    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;
};

console.log("zero to end", moveZeroToEnd(arr));
console.log("zero to end", moveZeroEnd(arr));