function solution(seq) {
  const first_bad_pair = (x) => {
    for (let i = 0; i < x.length; i++) {
      if (x[i] >= x[i + 1]) {
        return i;
      }
    }
    return -1;
  };
  let yy = first_bad_pair(seq);
  if (yy == -1) return true;
  console.log(
    first_bad_pair(seq.slice(0, yy).concat(seq.slice(yy + 1, seq.length)))
  );
  if (
    first_bad_pair(seq.slice(0, yy).concat(seq.slice(yy + 1, seq.length))) == -1
  )
    return true;
  if (
    first_bad_pair(
      seq.slice(yy, yy + 1).concat(seq.slice(yy + 2, seq.length))
    ) == -1
  )
    return true;
  return false;
}

let seq1 = [1, 3, 2, 1];
//solution(sequence) = false.

let seq2 = [1, 3, 2];
// solution(sequence) = true.

let seq3 = [1, 2, 3, 4, 5, 3, 5, 6];

console.log(
  // solution(seq1),
  solution(seq2)
  // solution(seq3),
);


// help: https://stackoverflow.com/questions/43017251/solve-almostincreasingsequence-codefights?answertab=votes#tab-top