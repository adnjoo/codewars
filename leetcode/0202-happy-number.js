/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
    let arr = [];
    while (n != 1) {
      n = String(n)
        .split("")
        .map((x) => Math.pow(x, 2))
        .reduce((a, b) => {
          return a + b;
        });
      if (arr.includes(n)) {
        console.log(arr);
        return false;
      }
      arr.push(n);
    }
    return true;
  };
  
  // console.log(isHappy(19));
  // isHappy(2)
  