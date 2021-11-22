/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function (left, right) {
    let counter = 0;
    for (i = left; i <= right; i++) {
      if (
        isPrime(
          i
            .toString(2)
            .split("")
            .filter((x) => x == "1").length
        )
      )
        counter++;
    }
    return counter;
  };
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
    // storing the calculated value would be much
    // better than calculating in each iteration
    var sqrt = Math.sqrt(num);
  
    for (var i = 2; i <= sqrt; i++) if (num % i === 0) return false;
    return true;
  }