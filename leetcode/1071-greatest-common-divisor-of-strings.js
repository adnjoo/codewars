var gcdOfStrings = function (str1, str2) {
  let smaller,
    larger,
    arr = [];
  if (str1.length > str2.length) {
    smaller = str2;
    larger = str1;
  } else {
    smaller = str1;
    larger = str2;
  }
  let gcd = smaller;
  while (gcd.length > 0) {
    let temp = "";
    while (temp.length < larger.length) {
      temp = temp + gcd;
      if (temp == larger) {
        console.log("gcd", gcd, larger, smaller);
        let temp2 = "";
        while (temp2.length < smaller.length) {
          temp2 = temp2 + gcd;
          if (temp2 == smaller) {
            return gcd;
          }
        }
      }
    }
    gcd = gcd.substring(0, gcd.length - 1);
  }
  return "";
};
let str1 = "ABCABC",
  str2 = "ABC";
// Output: "ABC"

let str3 = "ABABAB",
  str4 = "ABAB";
// Output: "AB"

let str5 = "LEET",
  str6 = "CODE";
// Output: ""

let str7 = "ABCDEF",
  str8 = "ABC";
// Output: ""

let str9 = "ABABABAB",
  str10 = "ABAB";

let str11 = "ABABAB",
  str12 = "ABAB";

let str13 = "TAUXXTAUXXTAUXXTAUXXTAUXX",
  str14 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(
  gcdOfStrings(str1, str2),
  // gcdOfStrings(str3, str4),
  // gcdOfStrings(str5, str6),
  // gcdOfStrings(str7, str8),
  // gcdOfStrings(str9, str10),
  // gcdOfStrings(str11, str12),
  gcdOfStrings(str13, str14)
);

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
//try largest smallest str
