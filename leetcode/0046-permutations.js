function permute(arr) {
  if (!arr.length) return [[]];
  return arr.flatMap((x) => {
    return permute(arr.filter((v) => v !== x)).map((vs) => [x, ...vs]);
  });
}

let nums = [1, 2, 3],
  // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  nums2 = [0, 1],
  // Output: [[0,1],[1,0]]
  nums3 = [1],
  nums4 = [4, 3, 2, 1];
// Output:  [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2]...]

console.log(permute(nums));
// npr = n factorial / (n-r)!<- will be 1 thus npr = n!
