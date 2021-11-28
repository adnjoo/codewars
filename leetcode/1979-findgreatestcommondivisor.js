var findGCD = function (nums) {
    nums.sort((a, b) => a - b);
    let arr = [nums[0], nums[nums.length - 1]]
    // find gcd of smallest
    for (let i = arr[0]; i > 0; i--) {
      if (arr[1] % i == 0 && arr[0] % i == 0) {
        return i;
      }
    }
  };
  
  let nums = [2, 5, 6, 9, 10],
    nums1 = [7, 5, 6, 8, 3],
    nums2 = [3, 3];
  
  console.log(findGCD(nums));
  console.log(findGCD(nums1));
  console.log(findGCD(nums2));
  