var smallestEqual = function (nums) {
    for (let i in nums) {
      if (i % 10 == nums[i]) {
        return i;
      }
    }
    return -1;
  };


let n1 = [0, 1, 2],
n2 = [4, 3, 2, 1],
n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
n4 = [2, 1, 3, 5, 2],
n5 = [7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6];

console.log(
// smallestEqual(n1),
// smallestEqual(n2),
// smallestEqual(n3),
// smallestEqual(n4)
smallestEqual(n5)
);
