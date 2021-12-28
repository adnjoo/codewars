var matrixReshape = function (mat, r, c) {
  // edge case
  if (r * c < mat.flat().length) return mat;
  let mat2 = [...mat];
  mat = mat.flat();
  let arr = [];
  //iterate row times
  for (let i = 0; i < r; i++) {
    let temp = [];
    //insert column times
    for (let j = 0; j < c; j++) {
      temp.push(mat.shift());
    }
    arr.push(temp);
  }
  if (arr.flat().includes(undefined)) return mat2;
  return arr;
};

let mat1 = [
    [1, 2],
    [3, 4],
  ],
  r1 = 1,
  c1 = 4,
  mat2 = [
    [1, 2],
    [3, 4],
  ],
  r2 = 2,
  c2 = 4;

let mat3 = [
    [1, 2],
    [3, 4],
  ],
  r3 = 1,
  c3 = 4;

console.log(
  // matrixReshape(mat1, r1, c1),
  matrixReshape(mat2, r2, c2),
  matrixReshape(mat3, r3, c3)
);
