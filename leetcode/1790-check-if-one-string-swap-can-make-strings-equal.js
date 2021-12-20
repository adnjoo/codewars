

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

// very slow solution
var areAlmostEqual = function (s1, s2) {
  if (s1 == s2) return true;
  for (let i = 0; i < s1.length; i++) {
    for (let j = i + 1; j < s1.length; j++) {
      let temp = s1;
      let hold = temp[i];
      temp = temp.replaceAt(i, temp[j]);
      temp = temp.replaceAt(j, hold);
      // console.log(temp,s2)
      if (temp == s2) {
        return true;
      }
    }
  }
  return false;
};

// check first char swap with every char

let s1 = "bank",
  s2 = "kanb";
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".

let s3 = "attack",
  s4 = "defend";
// Explanation: It is impossible to make them equal with one string swap.

let s5 = "kelb",
  s6 = "kelb";
// Output: true

let s7 = "abcd",
  s8 = "dcba";
// Output: false

console.log(areAlmostEqual(s1, s2));

// *notes: javascript strings are immutable

// helper function source: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
