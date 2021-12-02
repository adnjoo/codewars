/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let regex = /[a-z]/g;
  s = s
    .split(" ")
    .filter((x) => !x.match(regex))
    .map((x) => +x);
  // console.log(s)
  for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i + 1], s[i]);
    if (s[i + 1] <= s[i]) {
      return false;
    }
  }
  return true;
};

let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles",
  s2 = "hello world 5 x 5",
  s3 = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s",
  s4 = "4 5 11 26";

console.log(
  areNumbersAscending(s),
  areNumbersAscending(s2),
  areNumbersAscending(s3),
  areNumbersAscending(s4)
);
