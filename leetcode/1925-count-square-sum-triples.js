var countTriples = function (n) {
  let count = 0;
  for (let a = 1; a < n - 1; a++) {
    for (let b = a; b < n; b++) {
      c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0 && c <= n) {
        count++;
        // console.log(a, b, c);
      }
    }
  }
  return count * 2;
};

let n1 = 5,
  n2 = 10,
  n3 = 18;

console.log(
  // countTriples(n1),
  // countTriples(n2),
  countTriples(n3)
);



// * https://www.mathsisfun.com/pythagorean_triples.html