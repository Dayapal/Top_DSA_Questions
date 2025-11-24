function findDuplicate(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (freq[num]) {
      return num; // duplicate found
    } else {
      freq[num] = 1; // mark as seen
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 3])); // Output: 3
