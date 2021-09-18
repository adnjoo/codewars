/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  for (let i in nums){
    if(nums[i]%2==0){
      nums.unshift(...nums.splice(i,1))
    }
  }
  console.log(nums)
  return nums
};
sortArrayByParity([3,1,2,4])
sortArrayByParity([0])

// 3 1 2 4
// 2 3 1 4
// 4 2 3 1
// 2, 3, 1, 4 checked

// if sorted break out

// const sortArrayByParity = A => A.filter(e=>e%2==0).concat(A.filter(e=>e%2==1))




