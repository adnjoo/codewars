// first try with sliding window algo
var minimumDifference = function (nums, k) {
  // edge case
  if (nums.length == 1) return 0;
  let arr = [];
  //sort the array
  nums = nums.sort((a, b) => a - b);
  // console.log(nums)
  for (let i = 0; i < nums.length - k + 1; i++) {
    let temp = [],
      j = i;
    // sliding window
    for (let j = i; j < i + k; j++) {
      temp.push(nums[j]);
    }
    // diff
    arr.push(Math.abs(temp[0] - temp[temp.length - 1]));
  }
  // console.log(arr)
  return Math.min.apply(Math, arr);
};

let n1 = [9, 4, 1, 7],
  k1 = 2;

let n2 = [87063, 61094, 44530, 21297, 95857, 93551, 9918],
  k2 = 6;
// 74560

console.log(minimumDifference(n1, k1), minimumDifference(n2, k2));
