// second try
var moveZeroes = function (nums) {
  let count = 0;
  nums.forEach((x) => {
    if (x === 0) count++;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      count--;
      if (count > 0) i--;
    }
  }
  return nums;
};

let nums1 = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums1));
