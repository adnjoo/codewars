const wordPattern = (pattern, s) => {
  let obj = {};
  pattern = pattern.split("");
  s = s.split(" ");
  for (i in pattern) {
    if (obj[pattern[i]] == null) {
      obj[pattern[i]] = s[i];
    }
    if (obj[pattern[i]] != s[i]) {
      // console.log(s[i]);
      return false;
    }
  }
  if (hasDuplicates(Object.values(obj))) return false;
  if (s.length != pattern.length) return false;
  // console.log(obj);
  return true;
};

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("aaa", "aa aa aa aa"));
