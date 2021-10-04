//better
var pivotIndex = (n) => {
  var sum = n.reduce((a, b) => a + b, 0);
  var lhs = 0;
  for (let i = 0; i < n.length; i++) {
    if ((sum - n[i]) / 2 == lhs) {
      return i;
    }
    lhs += n[i];
  }
  return -1;
};

//first try
var pivotIndex = function (nums) {
  var sum = nums.reduce((num, curr, index) => num + curr, 0);
  var currsum = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((sum - nums[i]) / 2 == currsum) {
      return i;
    }
    currsum += nums[i];
  }
  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];
// let nums = [1,2,3]
// let nums =[2,1,-1]
// let nums = [-1,-1,0,1,1,0]
console.log(pivotIndex(nums));
