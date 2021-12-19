var secondHighest = function (s) {
  let arr = s.match(/[0-9]/g);
  let count = {};
  for (let i in arr) {
    count[arr[i]] = count[arr[i]] + 1 || 1;
  }
  count = Object.keys(count).sort((a, b) => {
    return b - a;
  });
  return count.length >= 2 ? count[1] : -1;
};

let s1 = "dfa12321afd";
// Output: 2
let s2 = "abc1111";
// Output: -1
let s3 = "abascasd";
// Output: -1

console.log(
  // secondHighest(s1),
  secondHighest(s3)
);
