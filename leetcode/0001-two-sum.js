// hi
/**  hash map
 * time complexity: O(n)
 * space complexity: O(n)
 */

const twoSum = (n, t) => {
  let hash = {};
  for (let i in n) {
    if (hash[n[i]]) {
      return [i, hash[n[i]]];
    } else {
      hash[t - n[i]] = i;
    }
  }
};

/** nested for
 * time complexity: O(n2)
 * space complexity: O(1)
 */

var twoSum = function (n, t) {
  for (i = 0; i < n.length; i++) {
    for (j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] == t) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9), twoSum([3, 2, 4], 6), twoSum([3, 3], 6));
