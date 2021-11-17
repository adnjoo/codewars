// attempt 2
const solution = (number) =>
  number <= 3
    ? 0
    : Array.from(Array(number).keys())
        .filter((x) => x % 3 == 0 || x % 5 == 0)
        .reduce((a, b) => a + b);

// attempt 1
function solution2(number) {
  let arr = [];
  if (number <= 3) {
    return 0;
  }
  for (i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
}

console.log(solution(20));