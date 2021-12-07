var selfDividingNumbers = function (left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
      let flag = true;
      let temp = i.toString().split("");
      for (let j = 0; j < temp.length; j++) {
        if (i % temp[j] != 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        arr.push(i);
      }
    }
    return arr;
  };
  
  let l1 = 1,
    r1 = 22,
    l2 = 47,
    r2 = 85;
  // Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
  
  selfDividingNumbers(l1, r1);
  selfDividingNumbers(l2, r2);
  