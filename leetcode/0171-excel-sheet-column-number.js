var titleToNumber = function (columnTitle) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hashmap = {},
    count = 0;
  alpha.split("").forEach((x, idx) => {
    hashmap[x] = idx + 1;
  });
  columnTitle = columnTitle.split("");
  let length1 = columnTitle.length;
  for (let i in columnTitle) {
    if (length1 - i - 1 === 0) count += hashmap[columnTitle[i]];
    else {
      count += Math.pow(26, length1 - i - 1) * hashmap[columnTitle[i]];
    }
  }
  return count;
};
console.log(Math.pow(26, 2));

let ct1 = "A",
  ct2 = "AB",
  ct3 = "ZY",
  ct4 = "FXSHRXW",
  ct5 = "I";
console.log(titleToNumber(ct5));
