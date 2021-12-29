// faster method using switch case
var judgeCircle = function(moves) {
  let x = 0, y = 0;
  for (let move of moves) {
      switch(move) {
          case 'U': y++ ;break;
          case 'D': y-- ;break;
          case 'L': x-- ;break;
          case 'R': x++ ;break;
      }
  }
  return x === 0 && y === 0
};

// https://leetcode.com/problems/robot-return-to-origin/discuss/174491/Javascript-100-using-O(n)-time-O(1)-space

// using hashmap
var judgeCircle = function (moves) {
  let hashmap = {};
  moves.split("").forEach((x) => {
    hashmap[x] = hashmap[x] + 1 || 1;
  });
  // console.log(hashmap)
  return hashmap["U"] == hashmap["D"] && hashmap["L"] == hashmap["R"];
};

let moves1 = "UD";

console.log(judgeCircle(moves1));
