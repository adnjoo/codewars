var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      if (Math.abs(nums[i] - nums[j]) == k) count++;
    }
  }
  console.log(count);
  return count;
};

// let nums = [1,2,2,1], k = 1
// let nums = [1,3], k = 3
let nums = [3, 2, 1, 5, 4],
  k = 2;

countKDifference(nums, k);
