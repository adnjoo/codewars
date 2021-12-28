var arrayPairSum = function (nums) {
  let arr = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    arr.push([nums[i], nums[i + 1]]);
  }
  arr.forEach((x, i) => {
    arr[i] = Math.min(x[0], x[1]);
  });
  return arr.reduce((a, b) => a + b);
};

let n1 = [1, 4, 3, 2],
  n2 = [6, 2, 6, 5, 1, 2];

console.log(arrayPairSum(n1), arrayPairSum(n2));
