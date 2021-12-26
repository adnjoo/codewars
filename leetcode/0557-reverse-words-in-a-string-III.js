// one liner
var reverseWords = (s) =>
  s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

let s1 = "Let's take LeetCode contest",
  s2 = "God Ding";

console.log(reverseWords(s1), reverseWords(s2));
