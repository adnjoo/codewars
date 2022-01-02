var merge = function (nums1, m, nums2, n) {
  //compare elements at i and j
  let nums3 = [...nums1].slice(0, m);
  for (let i = 0; i < nums1.length; i++) {
    if (nums3[0] <= nums2[0]) nums1[i] = nums3.shift();
    else if (nums2[0] < nums3[0]) nums1[i] = nums2.shift();
    else if (nums3.length == 0) nums1[i] = nums2.shift();
    else if (nums2.length == 0) nums1[i] = nums3.shift();
  }
//   console.log(nums1);
};

// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;

let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0],
  m = 6,
  nums2 = [1, 2, 2],
  n = 3;

console.log(merge(nums1, m, nums2, n));
