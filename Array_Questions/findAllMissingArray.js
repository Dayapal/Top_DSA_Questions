function findAllMissing(arr) {
  let max = 0;

  // find max number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  let freq = {};
  let missing = [];

  // mark present numbers
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = true;
  }

  // find missing numbers from 1 → max
  for (let i = 1; i <= max; i++) {
    if (!freq[i]) missing.push(i);
  }

  return missing;
}

console.log(findAllMissing([1, 3, 8])); 
// Output: [2, 4, 5, 6, 7]
