// 2nd way - hashmap
// time complexity: O(n)
var findDisappearedNumbers = function (nums) {
  let map = {};
  let count = 1;
  while (count <= nums.length) {
    if (map[count] == undefined) {
      map[count] = count;
    }
    count++;
  }
  for (let x of nums) {
    if (x in map) {
      delete map[x];
    }
  }
  // console.log(map)
  return Object.values(map);
};

// time complexity: O(n^2)
// var findDisappearedNumbers = function (nums) {
//   return Array.from({length: nums.length}, (_, i) => i + 1).filter(x=>nums.indexOf(x)==-1)
// };

let n1 = [4, 3, 2, 7, 8, 2, 3, 1],
  n2 = [1, 1];

console.log(findDisappearedNumbers(n1), findDisappearedNumbers(n2));

// help https://www.youtube.com/watch?v=efU_3Da3DV0&ab_channel=KevinNaughtonJr.
