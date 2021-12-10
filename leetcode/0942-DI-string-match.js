var diStringMatch = function (s) {
  let dummy = Array.from(Array(s.length + 1).keys());
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      arr.push(dummy.shift());
    }
    if (s[i] === "D") {
      arr.push(dummy.pop());
    }
  }
  arr.push(dummy.pop());
  return arr;
};

// I is beginning D is end
let s1 = "IDID";
// [0,1,2,3,4]
// Output: [0,4,1,3,2]
console.log(diStringMatch(s1));
