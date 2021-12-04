const makeDict = (x) => {
  let count = {};
  x.forEach((el) => {
    if ("balon".includes(el)) {
      count[el] = count[el] + 1 || 1;
    }
  });
  return count;
};

var maxNumberOfBalloons = function (text) {
  let x = makeDict(text.split(""));
  let max = Object.values(x).sort();
  max = max[0];
  console.log(x, max);
  while (max > -1) {
    //find highest number e.g. 2 check l, o are that number
    // b a n, should be at least half that number
    if (
      x["l"] >= 2 * max &&
      x["o"] >= 2 * max &&
      x["b"] >= max &&
      x["a"] >= max &&
      x["n"] >= max
    ) {
      return max;
    } else {
      max--;
    }
  }
  return 0;
};

// balloon
// 2 l
// 2 o
// 1 b
// 1 a
// 1 n

let s = "nlaebolko";
let s2 = "loonbalxballpoon";
let s3 = "leetcode";
console.log(maxNumberOfBalloons(s));
console.log(maxNumberOfBalloons(s2));
console.log(maxNumberOfBalloons(s3));
