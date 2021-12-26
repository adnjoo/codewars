// can we do this faster?
var nextGreaterElement = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    let idx = nums2.indexOf(nums1[i]),
      temp = nums2[idx],
      element = undefined;
    // search right of nums2 for element greater than temp
    let j = idx + 1;
    while (j < nums2.length) {
      if (nums2[j] > temp) {
        element = nums2[j];
        break;
      }
      j++;
    }
    if (element != undefined) {
      arr.push(element);
    } else {
      arr.push(-1);
    }
  }
  return arr;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2],
  nums3 = [2, 4],
  nums4 = [1, 2, 3, 4];

console.log(nextGreaterElement(nums1, nums2), nextGreaterElement(nums3, nums4));
