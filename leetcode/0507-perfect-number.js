// faster < 100ms - uses O(sqrt(n)) to get divisors **
var checkPerfectNumber = function (num) {
  function printDivisors(n) {
    let arr = [];
    // Note that this loop runs till square root
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        // If divisors are equal, print only one
        if (parseInt(n / i, 10) == i) arr.push(i);
        // Otherwise print both
        else arr.push(i, parseInt(n / i, 10));
        // console.log(i + " " + parseInt(n / i, 10) + " ");
      }
    }
    arr = arr.sort((a, b) => a - b);
    arr.pop();
    return arr;
  }
  if (num === 1) return false;
  let divisors = printDivisors(num).reduce((a, b) => a + b);
  return divisors === num;
};

// slower getdivisors solution - 1800ms
var checkPerfectNumber = function (num) {
  if (num === 1) return false;
  let i = 1,
    sum = 0;
  // get factors; highest factor will be num / 2 e.g. 14 if num == 28
  while (i <= num / 2) {
    if (num % i == 0) {
      sum += i;
    }
    i++;
  }
  return sum === num;
};

let n1 = 28,
  n2 = 7,
  n3 = 8386560;

console
  .log
  // checkPerfectNumber(n1),
  // checkPerfectNumber(n2),
  // checkPerfectNumber(n3),
  ();

// ** https://www.geeksforgeeks.org/find-divisors-natural-number-set-1/?ref=lbp
