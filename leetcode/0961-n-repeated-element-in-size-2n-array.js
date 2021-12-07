const makeDict = (x) => {
    let count = {};
    x.forEach((el) => {
      count[el] = count[el] + 1 || 1;
    });
    return count;
  };
  
  var repeatedNTimes = function (nums) {
    let n = nums.length / 2;
    let dict = makeDict(nums);
    let key = Object.keys(dict).find((k) => dict[k] === n);
    return key;
  };
  
  let n1 = [1, 2, 3, 3],
    n2 = [2, 1, 2, 5, 3, 2],
    n3 = [5, 1, 5, 2, 5, 3, 5, 4];
  // 3,2,5
  console.log(repeatedNTimes(n1), repeatedNTimes(n2), repeatedNTimes(n3));
  