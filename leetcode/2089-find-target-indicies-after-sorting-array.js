// 80ms
var targetIndices = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) break;
    if (nums[i] == target) arr.push(i);
  }
  return arr.length > 0 ? arr : [];
};

let nums1 = [1, 2, 5, 2, 3],
  target1 = 2;

console.log(targetIndices(nums1, target1));
