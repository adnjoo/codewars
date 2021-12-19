var checkOnesSegment = function (s) {
  // edge case
  if (s == "10") return true;
  let segments = 0;
  let oneFlag = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      oneFlag = true;
    } else if (s[i] == "0" && oneFlag) {
      segments++;
      oneFlag = false;
    }
    if (i == s.length - 1 && oneFlag) {
      segments++;
    }
  }
  console.log(s, segments);
  return segments == 1;
};

let s1 = "1001",
  // false
  s2 = "110",
  // true
  s3 = "1",
  // true
  s4 = "10",
  // true
  s5 = "111";
// true

console.log(
  checkOnesSegment(s1),
  checkOnesSegment(s2),
  checkOnesSegment(s3),
  checkOnesSegment(s4),
  checkOnesSegment(s5)
);
