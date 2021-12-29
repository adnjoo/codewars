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

//LR cancel out
// UD cancel out
// hash map
