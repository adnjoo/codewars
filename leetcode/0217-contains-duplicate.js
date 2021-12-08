// hash map

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
  