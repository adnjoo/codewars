var getLucky = function (s, k) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let hashmap = {};
  alpha.forEach((x, idx) => {
    hashmap[x] = idx + 1;
  });
  let output = s
    .split("")
    .map((x) => hashmap[x])
    .join("");
  while (k > 0) {
    output = output
      .split("")
      .map((x) => +x)
      .reduce((a, b) => a + b)
      .toString();
    k--;
  }
  return output;
};

let s1 = "iiii",
  k1 = 1,
  s2 = "leetcode",
  k2 = 2,
  s3 = "zbax",
  k3 = 2;

console.log(
  // getLucky(s1, k1),
  getLucky(s2, k2),
  getLucky(s3, k3)
);
