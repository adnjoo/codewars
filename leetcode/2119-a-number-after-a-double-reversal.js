var isSameAfterReversals = function (num) {
  // edge case
  if (num === 0) return true;
  let copy = num;
  const leadingZero = (x) => {
    if (x[0] != "0") return x;
    else
      while (x[0] == "0") {
        x.shift();
      }
  };
  num = num.toString().split("").reverse();
  leadingZero(num);
  num = +num.reverse().join("");
  return num === copy;
};

let num1 = 526,
  num2 = 1800,
  num3 = 0;

console.log(
  isSameAfterReversals(num1),
  isSameAfterReversals(num2),
  isSameAfterReversals(num3)
);
