//faster
const finalValueAfterOperations = (o) => {
  let c = 0;
  o.forEach((x) => (x.includes("++") ? c++ : c--));
  return c;
};

//first try
var finalValueAfterOperations = function (o) {
  let counter = 0;
  for (let i = 0; i < o.length; i++) {
    if (o[i] == "--X" || o[i] == "X--") counter--;
    if (o[i] == "++X" || o[i] == "X++") counter++;
  }
  console.log(counter);
  return counter;
};

// let operations = ["--X","X++","X++"]
// let operations = ["++X","++X","X++"]
// let operations = ["X++","++X","--X","X--"]
finalValueAfterOperations(operations);
