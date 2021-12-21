function solution(matrix) {
  let arr = [];
  // iterate through each row
  for (let i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let flag = false;
      if (row[j] > 0) flag = true;
      if (i > 0) {
        // and check all floors above
        for (let k = 0; k < i; k++) {
          if (matrix[k][j] == 0) {
            flag = false;
          }
        }
      }
      if (flag) {
        arr.push(row[j]);
      }
    }
  }
  // if no values return nil
  if (arr.length == 0) return 0;
  return arr.reduce((a, b) => a + b);
}

let m1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

let m2 = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

console.log(
  // solution(m1),
  solution(m2)
);
