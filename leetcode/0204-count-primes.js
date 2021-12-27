// ~1800ms
var countPrimes = function(n) {
    // initialize array
    let primes = Array.from({length: n+1}, (_, i) => true);
    // console.log(primes)
    for (let i = 2; i * i < n; i++) {
       if (!primes[i]) continue;
       for (let j = i * i; j < n; j += i) {
          primes[j] = false;
       }
    }
    console.log(primes)
    let count = 0;
    for (let j = 2; j < n; j++) {
       if (primes[j]) count++;
    }
    return count;
  }
  
  console.log(
    countPrimes(10),
    // countPrimes(499979),
    // countPrimes(5000000),
  )