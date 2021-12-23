// m is rows, n is columns
var construct2DArray = function (original, m, n) {
  // check original can fit inside 2d array
  if (original.length != m * n) return [];
  let counter = 0,
    arr = [];
  while (counter < original.length) {
    let row = [];
    while (row.length < n) {
      row.push(original[counter]);
      counter++;
    }
    arr.push(row);
  }
  return arr;
};

let o1 = [1, 2, 3, 4],
  m1 = 2,
  n1 = 2,
  o2 = [2, 2, 3, 4, 5, 6],
  m2 = 2,
  n2 = 2,
  o3 = [1, 2],
  m3 = 1,
  n3 = 1;

console.log(construct2DArray(o1, m1, n1), construct2DArray(o3, m3, n3));
