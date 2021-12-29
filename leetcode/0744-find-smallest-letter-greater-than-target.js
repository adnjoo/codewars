// another way
var nextGreatestLetter = function(letters, target) {
  for(const letter of letters) {
      if(target < letter) return letter
  }
  return letters[0]
};

// first try
var nextGreatestLetter = function (letters, target) {
  let alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
    idx = alpha.indexOf(target);
  let newAlpha = alpha.slice(idx, idx + 26);
  let min = newAlpha.length;
  for (let i in letters) {
    if (newAlpha.indexOf(letters[i]) < min && letters[i] != target) {
      min = newAlpha.indexOf(letters[i]);
    }
  }
  return newAlpha[min];
};

let letters1 = ["c", "f", "j"],
  target1 = "a";
let letters2 = ["c", "f", "j"],
  target2 = "c";
let letters3 = ["c", "f", "j"],
  target3 = "d";

console.log(
  nextGreatestLetter(letters1, target1),
  nextGreatestLetter(letters2, target2),
  nextGreatestLetter(letters3, target3)
);