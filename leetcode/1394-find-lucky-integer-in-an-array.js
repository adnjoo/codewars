// hash map
var findLucky = function (arr) {
  let count = {};
  arr.forEach((el) => {
    count[el] = count[el] + 1 || 1;
  });
  // if the count of a number is equal to the number itself, then it is a lucky number
  let largest = -1;
  for (const [key, value] of Object.entries(count)) {
    if (key == value) {
      largest = +key;
    }
  }
  return largest;
};

let a1 = [2, 2, 3, 4],
  a2 = [1, 2, 2, 3, 3, 3],
  a3 = [2, 2, 2, 3, 3];
console.log(findLucky(a1), findLucky(a2), findLucky(a3));
