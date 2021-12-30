var firstUniqChar = function (s) {
  let count = {};
  s.split("").forEach((x) => {
    count[x] = count[x] + 1 || 1;
  });
  let y = Object.fromEntries(Object.entries(count).filter(([k, v]) => v == 1));
  return s.indexOf(Object.keys(y)[0]);
};

let s1 = "leetcode",
  s2 = "loveleetcode",
  s3 = "aabb";

console.log(firstUniqChar(s1), firstUniqChar(s2), firstUniqChar(s3));
