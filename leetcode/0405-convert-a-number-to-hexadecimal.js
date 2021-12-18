var toHex = function (num) {
  let table = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let result = "";
  if (num < 0) {
    num = 4294967296 + num;
  }
  while (num) {
    let a = num % 16;
    num = Math.floor(num / 16);
    result = table[a] + result;
  }
  return result || "0";
};

/* shortcut
var toHex = function (num) {
  if (num < 0) {
    num = 4294967296 + num;
  }
  return num.toString(16);
};
*/

let n1 = 26;
// 1A

console.log(toHex(n1));
