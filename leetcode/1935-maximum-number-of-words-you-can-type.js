var canBeTypedWords = function (text, brokenLetters) {
  text = text.split(" ");
  let count = text.length;
  brokenLetters = brokenLetters.split("");
  text.forEach((word) => {
    let flag = false;
    for (let i = 0; i < brokenLetters.length; i++) {
      if (word.indexOf(brokenLetters[i]) > -1) {
        flag = true;
        break;
      }
    }
    if (flag) count--;
  });
  return count;
};

let text1 = "hello world",
  brokenLetters1 = "ad";
let text2 = "leet code",
  brokenLetters2 = "lt";
let text3 = "leet code",
  brokenLetters3 = "e";

console.log(
  canBeTypedWords(text1, brokenLetters1),
  canBeTypedWords(text2, brokenLetters2),
  canBeTypedWords(text3, brokenLetters3)
);
