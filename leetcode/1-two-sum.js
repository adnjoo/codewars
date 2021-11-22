var twoSum = function (n, t) {
    for (i = 0; i < n.length; i++) {
      for (j = i + 1; j < n.length; j++) {
        if (n[i] + n[j] == t) {
          return [i, j];
        }
      }
    }
  };

//   console.log(twoSum([2, 7, 11, 15], 9));
//   console.log(twoSum([3,2,4], 6));
//   console.log(twoSum([3,3], 6));
  