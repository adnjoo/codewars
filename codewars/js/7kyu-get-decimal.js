//other way
function getDecimal(n) {
  return Math.abs(n % 1);
}

// one way
const getDecimal = (n) => Math.abs(n - parseInt(n));
