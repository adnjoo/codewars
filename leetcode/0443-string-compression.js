const compress = (str) => {
  let n = str.length;
  let str2 = [];
  for (let i = 0; i < str.length; i++) {
    // count occurrences of current character
    let count = 1;
    while (i < n - 1 && str[i] == str[i + 1]) {
      count += 1;
      i += 1;
    }
    str2.push(str[i]);
    if (count > 1) {
      let temp = String(count).split("");
      temp.forEach((y) => str2.push(y));
    }
  }
  str.length = 0;
  str2.forEach((x) => {
    str.push(x);
  });
};

let x1 = ["a", "a", "b", "b", "c", "c", "c"];
// let x2 = ["a"];
let x3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
compress(x1);
console.log(x1);
