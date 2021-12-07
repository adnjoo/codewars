// quicksort
// worst case time complexity => O(N2)
const findKthLargest = (nums, k) => nums.sort((a, b) => a - b)[nums.length - k];

let n1 = [3, 2, 1, 5, 6, 4],
  k1 = 2;
// Output: 5

console.log(findKthLargest(n1, k1));


// notes
// https://www.programcreek.com/2014/05/leetcode-kth-largest-element-in-an-array-java/