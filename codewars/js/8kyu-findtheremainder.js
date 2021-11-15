//better
function remainder(a, b) {
  return a > b ? a % b : b % a;
}

//attempt
const remainder = (a, b) => {
  if (a === 0 || b === 0) {
    return NaN;
  }
  if (a > b) {
    return a % b;
  } else {
    return b % a;
  }
};
