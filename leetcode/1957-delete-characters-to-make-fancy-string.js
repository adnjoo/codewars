//289ms
var makeFancyString = function (s) {
  let a = s.split("");

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1] && a[i + 1] === a[i + 2]) {
      a[i] = "";
    }
  }

  return a.join("");
};

// 6000ms
var makeFancyString = function (s) {
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      let counter = 0;
      while (s[i + counter] == s[i]) {
        counter++;
      }
      //delete counter less two remaining chars
      // console.log('c',counter,i)
      s.splice(i, counter - 2);
    }
  }
  return s.join("");
};

let s1 = "leeeetcode",
  s2 = "aaabaaaa",
  s3 = "aab",
  s4 =
    "ggggggggggggggggggggggggggggccccccccccccccccccccccccccccccccccccccccccccccccchhhhhhhhhtttttttttttttttttttttttttttttttttttttttttttttthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuucccccccccccccccooooooooooooooooooooooooooeeeeeeeeeeeeeeyyyyttttttttttttttttrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrjjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkwwwwwwwwwwwwwwwwwwwwwttttttttttttttttttttttttttggguuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuukkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaqqqqqqqqqqqqqqqqssssdddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccgggggggggggggggggguuuuuuuuuuuuuuuuuuyyyyyyyyyyynnnnnnnnnnnnnnnnjjjjjjjjjjjjjjjjjjjjjuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuffffffffffffffffggggggggggggggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkoooooooooooooooooooooo";

console.log(
  makeFancyString(s1),
  makeFancyString(s2),
  makeFancyString(s3),
  makeFancyString(s4)
);
