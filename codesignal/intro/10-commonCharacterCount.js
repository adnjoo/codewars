const hashmap = (x) => {
  let count = {};
  x.forEach((y) => {
    count[y] = count[y] + 1 || 1;
  });
  return count;
};

function solution(s1, s2) {
  // use hashmap
  let arr = [];
  let s3 = hashmap(s1.split(""));
  let s4 = hashmap(s2.split(""));
  for (let i = 0; i < Object.keys(s3).length; i++) {
    //if doesnt exist, continue else take lower amount or equal in s4
    if (s4[Object.keys(s3)[i]] == undefined) continue;
    let min = Math.min(s4[Object.keys(s3)[i]], s3[Object.keys(s3)[i]]);
    arr.push(min);
  }
  if (arr.length == 0) return 0;
  return arr.reduce((a, b) => a + b);
}

let s1 = "aabcc",
  s2 = "adcaa";
console.log(solution(s1, s2));
// solution(s1, s2) = 3.
