// TC
// hint - sliding window algorithm / two-pointer
function subarraySum(arr, n, s) {
  let left = 0;
  let currentSum = 0;
  // right pointer to traverse
  for (let right = 0; right < arr.length; right++) {
    // calculate current sum
    currentSum += arr[right];
    while (currentSum > s) {
      // move left index and subtract from currentSum
      currentSum -= arr[left];
      left += 1;
    }
    if (currentSum === s) return [left + 1, right + 1];
  }
  return [-1];
}

let ans = subarraySum([1, 2, 3, 7, 5], 5, 12);
console.log(ans);
