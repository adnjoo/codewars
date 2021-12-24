// use prefix sum
// time complexity: O(n)
var subarraySum = function (nums, k) {
  let count = 0;
  let curSum = 0;
  let hashmap = {
    0: 1,
  };
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    let diff = curSum - k;
    count += hashmap[diff] || 0;
    hashmap[curSum] = hashmap[curSum] + 1 || 1;
  }
  // console.log(hashmap)
  return count;
};

let n1 = [1, 1, 1],
  k1 = 2,
  n2 = [1, 2, 3],
  k2 = 3,
  n3 = [1, -1, 1, 1, 1, 1],
  k3 = 3;

console.log(subarraySum(n1, k1), subarraySum(n2, k2), subarraySum(n3, k3));

// advice: https://www.youtube.com/watch?v=fFVZt-6sgyo&ab_channel=NeetCode
