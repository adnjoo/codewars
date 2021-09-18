var heightChecker = heights => {
  let h2 = heights.slice(), count = 0
  heights.sort((a,b)=>a-b).forEach((x,i)=>x!==h2[i] ? count++ : null)
  return count;
};

let heights = [1,1,4,2,1,3]
let heights2 = [5,1,2,3,4]
let heights3 = [1,2,3,4,5]
heightChecker(heights)
heightChecker(heights2)
heightChecker(heights3)

