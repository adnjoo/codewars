// another hash map method but returns early if dup found
// time complexity: at most O(N) - must run through entire input or less

var containsDuplicate2 = function (nums) {
  // hash table
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(dict);
    if (dict[nums[i]] == 1) return true;
    else dict[nums[i]] = 1;
  }
  return false;
};

// hash map method
// time complexity: at least O(N) - must run through entire input

var containsDuplicate = function (nums) {
  let count = {};
  nums.forEach((el) => {
    count[el] = count[el] + 1 || 1;
  });
  return Object.values(count).filter((x) => x >= 2).length > 0;
};

let n1 = [1, 2, 3, 1],
  n2 = [1, 2, 3, 4],
  n3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true
console.log(containsDuplicate(n3));
