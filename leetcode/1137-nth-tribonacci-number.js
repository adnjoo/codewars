var tribonacci = function (n) {
  // calc tribonacci on the fly
  let arr = [0, 1, 1];
  if (n == 0) {
    return arr[0];
  } else if (n == 1) {
    return arr[1];
  } else if (n == 2) {
    return arr[2];
  }
  // n is at least 3
  for (let i = 3; i <= n; i++) {
    let t = arr[i - 1] + arr[i - 2] + arr[i - 3];
    console.log(i, t);
    arr.push(t);
  }
  return arr[n];
};

let n1 = 4,
  n2 = 25;

console.log(tribonacci(n1), tribonacci(n2));
