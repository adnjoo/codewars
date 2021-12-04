const findAllOccurrences = (str, substr) => {
  let result = [];
  let idx = str.indexOf(substr);
  while (idx !== -1) {
    result.push(idx);
    idx = str.indexOf(substr, idx + 1);
  }
  return result;
};

var shortestToChar = function (s, c) {
  let arr = [];
  let occ = findAllOccurrences(s, c);
  console.log(occ);
  s = s.split("").forEach((el, idx) => {
    //find closest number
    let diffArr = occ.map((x) => Math.abs(idx - x));
    let minNumber = Math.min(...diffArr);
    let index = diffArr.findIndex((x) => x === minNumber);
    // console.log(Math.abs(idx - occ[index]));
    arr.push(Math.abs(idx - occ[index]));
  });
  return arr;
};

let s = "loveleetcode",
  c = "e";
let s2 = "aaab",
  c2 = "b";

console.log(shortestToChar(s, c), shortestToChar(s2, c2));
