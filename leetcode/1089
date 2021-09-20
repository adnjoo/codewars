/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let count = 0;
  while (count < arr.length) {
    if (arr[count] == 0) {
      arr.splice(count, 0, 0); // insert at index count, do not replace, 0 value
      arr.pop();
      count++;
    }
    count++;
  }
  console.log(arr);
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
//if 0

// Input: arr = [1,0,2,3,0,4,5,0]
// count 1
// 1 0 0 2 3 0 4 5
// 1 0 0 2 3 0 0 4
// Output: [1,0,0,2,3,0,0,4]

