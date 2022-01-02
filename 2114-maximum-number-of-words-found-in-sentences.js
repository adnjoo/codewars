var mostWordsFound = function (sentences) {
  let count = 0;
  for (let i in sentences) {
    let len = sentences[i].split(" ").length;
    if (len > count) count = len;
  }
  return count;
};

let sentences1 = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

console.log(mostWordsFound(sentences1));
