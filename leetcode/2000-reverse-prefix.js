var reversePrefix = function (word, ch) {
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (word[i] == ch) {
      return word
        .slice(0, i + 1)
        .reverse()
        .concat(word.slice(i + 1))
        .join("");
    }
  }
  return word.join("");
};

let word = "abcdefd",
  ch = "d";

reversePrefix(word, ch);
