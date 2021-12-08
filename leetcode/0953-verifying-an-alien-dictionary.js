var isAlienSorted = function (words, order) {
  let dict = {};
  order = order.split("").forEach((x, i) => (dict[x] = i));
  // compare letter by letter
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      // console.log(i, j, words[i][j], words[i + 1][j]);
      if (
        dict[words[i][j]] > dict[words[i + 1][j]] ||
        dict[words[i + 1][j]] === undefined
      )
        return false;
      // if h comes before l break out of inner loop
      if (dict[words[i][j]] < dict[words[i + 1][j]]) break; 
    }
  }
  return true;
};

// let words = ["hello", "leetcode"],
// order = "hlabcdefgijkmnopqrstuvwxyz";
// let words = ["word", "world", "row"],
// order = "worldabcefghijkmnpqstuvxyz";
let words = ["apple", "app"],
  order = "abcdefghijklmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));
