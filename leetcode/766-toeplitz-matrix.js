var isToeplitzMatrix = function (m) {
  for (let y = 0; y < m.length; y++) {
    for (let x = 0; x < m[0].length; x++) {
        // console.log(y,x)
      if (y > 0 && x > 0 && m[y][x] !== m[y - 1][x - 1]) {
        // console.log('false',y,x)
        return false;
      }
    }
  }
  return true;
};
