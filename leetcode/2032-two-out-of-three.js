var twoOutOfThree = function (nums1, nums2, nums3) {
    // sort array
    let sorted = [nums1, nums2, nums3].sort((a, b) => b.length - a.length),
      arr = [];
    // compares 1st array with 2nd and 3rd
    for (let i in sorted[0]) {
      if (
        sorted[1].indexOf(sorted[0][i]) > -1 ||
        sorted[2].indexOf(sorted[0][i]) > -1
      ) {
        arr.push(sorted[0][i]);
      }
    }
    // compare 2nd array with 3rd
    for (let i in sorted[1]) {
      if (sorted[2].indexOf(sorted[1][i]) > -1) {
        arr.push(sorted[1][i]);
      }
    }
    // remove duplicates
    return [...new Set(arr)];
  };
  
  let x = [1, 1, 3, 2],
    y = [2, 3],
    z = [3];
  let x1 = [3, 1],
    y1 = [2, 3],
    z1 = [1, 2];
  let x2 = [1, 2, 2],
    y2 = [4, 3, 3],
    z2 = [5];
  
  console.log(twoOutOfThree(x, y, z));
  console.log(twoOutOfThree(x1, y1, z1));
  console.log(twoOutOfThree(x2, y2, z2));
  