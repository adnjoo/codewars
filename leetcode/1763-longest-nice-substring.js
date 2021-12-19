// brute force with hash map
const hashmap = (x) => {
  x = x.split("");
  let count = {};
  x.forEach((y) => {
    count[y] = count[y] + 1 || 1;
  });
  let opposite = Object.keys(count);
  for (let i in opposite) {
    if (opposite[i] == opposite[i].toUpperCase()) {
      opposite[i] = opposite[i].toLowerCase();
    } else {
      opposite[i] = opposite[i].toUpperCase();
    }
  }
  let flag = true;
  for (let i = 0; i < opposite.length; i++) {
    if (count[opposite[i]] == undefined) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log("nice", count);

    return Object.values(count).reduce((a, b) => a + b);
  }
};

var longestNiceSubstring = function (s) {
  let longest = "";
  if (s.length == 1) {
    return longest;
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (hashmap(s.substring(i, j + 1)) > longest.length) {
        longest = s.substring(i, j + 1);
      }
    }
  }
  return longest;
};

let s1 = "YazaAay",
  s2 = "Bb",
  s3 = "c",
  s4 = "dDzeE";

console.log(
  longestNiceSubstring(s1),
  longestNiceSubstring(s2),
  longestNiceSubstring(s3),
  longestNiceSubstring(s4)
);
