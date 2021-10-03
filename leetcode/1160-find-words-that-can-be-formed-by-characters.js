var countCharacters = function (w, c) {
  let arr = [];
  for (let i in w) {
    let temp = c,
      flag = true;
    for (let j in w[i]) {
      if (!temp.includes(w[i][j])) {
        flag = false;
        break;
      }
      if (temp.includes(w[i][j])) temp = temp.replace(w[i][j], "");
    }
    if (flag) arr.push(w[i]);
  }
  // console.log(arr)
  return arr.join("").length;
};
