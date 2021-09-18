var sumOddLengthSubarrays = function (arr) {
  let arr2 = [];
  let counter = 1;
  while (counter < arr.length + 1) {
    for (let i = 0; i < arr.length - counter + 1; i++) {
      arr2.push(arr.slice(i, i + counter));
    }
    counter += 2;
  }
  return arr2.flat().reduce((a, b) => a + b);
};
