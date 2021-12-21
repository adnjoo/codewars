// time complexity : n*logn + (2)n
var minimumAbsDifference = function (arr) {
  // sort the arr | runtime: n*logn
  let temp = [...arr].sort((a, b) => a - b);
  let pairsArr = [];
  // console.log(temp)
  // find minimum distance - test distance between i and i + 1
  let min = 2000000;
  for (let i = 0; i < temp.length - 1; i++) {
    if (Math.abs(temp[i] - temp[i + 1]) < min) {
      min = Math.abs(temp[i] - temp[i + 1]);
    }
  }
  // find all pairs with difference == 1
  for (let j = 0; j < temp.length - 1; j++) {
    if (Math.abs(temp[j] - temp[j + 1]) == min) {
      pairsArr.push([temp[j], temp[j + 1]]);
    }
  }
  return pairsArr;
};
