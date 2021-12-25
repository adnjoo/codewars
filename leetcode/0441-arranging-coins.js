const arrangeCoins = (n) => {
  let sum = 0,
    i = 1;
  while (sum <= n) {
    sum += i;
    i++;
  }
  return i - 2;
};

let n = 5;

console.log(arrangeCoins(n));
