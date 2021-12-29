// ooh this is smart heheh
const rotateString = (s, goal) =>
  (goal + goal).indexOf(s) >= 0 && s.length == goal.length;

// first try
var rotateString1 = function (s, goal) {
  let counter = 0;
  while (counter < s.length) {
    s = s.split("");
    let temp = s[0];
    s = s.slice(1, s.length).join("") + temp;
    console.log(goal, s);
    if (goal === s) {
      return true;
    }
    counter++;
  }
  return false;
};

let s = "abcde",
  goal = "cdeab";

console.log(rotateString(s, goal));
