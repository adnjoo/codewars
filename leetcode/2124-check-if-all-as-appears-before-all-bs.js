// var checkString = (s) => (!s.match(/a/g) ? true : !s.includes("ba"));
var checkString = (s) => s.indexOf('ba') == -1;

let s1 = "aaabbb",
  s2 = "abab",
  s3 = "bbb";

console.log(checkString(s1), checkString(s2), checkString(s3));
