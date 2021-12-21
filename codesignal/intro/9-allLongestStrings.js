function solution(input) {
  let arr2 = [];
  // find longest string first
  let temp = [...input].sort((a, b) => a.length - b.length);
  temp = temp[temp.length - 1].length;
  for (let i in input) {
    if (input[i].length == temp) arr2.push(input[i]);
  }
  return arr2;
}

let arr = ["aba", "aa", "ad", "vcd", "aba"];
// the output should be solution(inputArray) = ["aba", "vcd", "aba"].

console.log(solution(arr));
