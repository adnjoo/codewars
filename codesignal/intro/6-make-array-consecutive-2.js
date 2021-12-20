// Make Array Consecutive 2

function solution(statues) {
  statues = statues.sort((a, b) => a - b);
  // console.log(statues)
  let expectedLength = statues[statues.length - 1] - statues[0] + 1;
  return expectedLength - statues.length;
}
