// first try
var dominantIndex = function (nums) {
  let copy = [...nums].sort((a, b) => a - b);
  let largest = copy[copy.length - 1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === largest) {
      continue;
    }
    if (nums[i] * 2 > largest) {
      return -1;
    }
  }
  return nums.indexOf(largest);
};

let nums1 = [3, 6, 1, 0],
  nums2 = [1, 2, 3, 4],
  nums3 = [1, 2, 16, 35, 44, 100, 27, 0];

console.log(dominantIndex(nums1), dominantIndex(nums2), dominantIndex(nums3));

/*
hints:
  Scan through the array to find the unique largest element `m`, 
  keeping track of it's index `maxIndex`. Scan through the array again. 
  If we find some `x != m` with `m < 2*x`, we should return `-1`. 
  Otherwise, we should return `maxIndex`.
  */
