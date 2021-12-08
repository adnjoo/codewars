// hash map
// Time complexity: O(n)
var containsNearbyDuplicate = function (nums, k) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] != undefined) {
      if (Math.abs(i - count[nums[i]]) <= k) {
        return true;
      }
    }
    count[nums[i]] = i;
  }
  return false;
};

/**  nested for loop
 * Time complexity: O(n2)
 * var containsNearbyDuplicate = function (nums, k) {
 *   for (let i = 0; i < nums.length; i++) {
 *     for (let j = i + 1; j < nums.length; j++) {
 *       if(nums[i]==nums[j] && Math.abs(i-j) <= k){
 *         return true
 *       }
 *     }
 *   }
 *   return false
 * };
 */

let n1 = [1, 2, 3, 1],
  k1 = 3;
// Output: true
let n2 = [1, 0, 1, 1],
  k2 = 1;
// Output: true
let n3 = [1, 2, 3, 1, 2, 3],
  k3 = 2;
// Output: false

console.log(
  containsNearbyDuplicate(n1, k1),
  containsNearbyDuplicate(n2, k2),
  containsNearbyDuplicate(n3, k3)
);
