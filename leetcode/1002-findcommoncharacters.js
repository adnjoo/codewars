commonChars = function (words) {
  let arr = [];
  for (let h in words) {
    words[h] = words[h].split("");
  }
  for (let i in words[0]) {
    let flag = true;
    for (let j = 1; j < words.length; j++) {
      let index = words[j].indexOf(words[0][i]);
      if (index > -1) {
        words[j].splice(index, 1);
      }
      if (index == -1) {
        flag = false;
        continue;
      }
    }
    if (flag) {
      arr.push(words[0][i]);
    }
  }
  return arr;
};
