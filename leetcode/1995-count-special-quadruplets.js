// quadruple (i.e. 4) nested loops
// time complexity : O(N^4)
var countQuadruplets = function (nums) {
  //check every quadruplet
  let count = 0,
    test = [];
  n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          test.push([i, j, k, l]);
          if (nums[i] + nums[j] + nums[k] === nums[l]) count++;
          //   console.log(nums[l]);
        }
      }
    }
  }
  //   console.log('testcounter',test)
  return count;
};

let n1 = [1, 2, 3, 6],
  n2 = [3, 3, 6, 4, 5],
  n3 = [1, 1, 1, 3, 5];

//   https://www.calculatorsoup.com/calculators/discretemathematics/combinations.php

/*
  n3 
  quadruple loop
  bottom loop 
  i=0, j=1, k=2, l=3, n=5
  i: 0 1 2 3
  v: 1 1 1 3; count++
  i: 0 1 2 4  
  v: 1 1 1 5; no
  penultimate loop
  i: 0 1 3 4
  v: 1 1 3 5; count++
  second loop
  i: 0 2 3 4
  v: 1 1 3 5; count++
  top layer
  i: 1 2 3 4
  v: 1 1 3 5; count ++ 
  so return 4
  */

console.log(countQuadruplets(n1), countQuadruplets(n2), countQuadruplets(n3));

// help https://www.geeksforgeeks.org/count-quadruplets-with-sum-k-from-given-array/
