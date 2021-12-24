// use prefix sum and hashmap

var subarraysDivByK = function (nums, k) {
  let count = 0,
    curSum = 0,
    hashmap = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    let diff = curSum % k;
    if (diff < 0) {
      diff += k;
    }
    if (hashmap[diff] != undefined) {
      count += hashmap[diff];
      hashmap[diff] += 1;
    } else {
      hashmap[diff] = 1;
    }
  }
  // console.log(hashmap)
  return count;
};

let n1 = [4, 5, 0, -2, -3, 1],
  k1 = 5,
  n2 = [-1, 2, 9],
  k2 = 2;
console.log(subarraysDivByK(n1, k1), subarraysDivByK(n2, k2));

