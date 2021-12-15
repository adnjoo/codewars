var largestPerimeter = function (nums) {
    nums = nums.sort((a, b) => a - b);
    //start with largest side
    //test all other sides
    let triangle = [];
    for (let i = nums.length - 1; i >= 0; i--) {
      let a = nums[i];
      let b = nums[i - 1];
      let c = nums[i - 2];
      if (b + c > a) {
        triangle.push(a, b, c);
        return triangle.reduce((a, b) => a + b);
      }
    }
    return 0;
  };
  
  let n1 = [2, 1, 2],
    n2 = [1, 2, 1],
    n3 = [3, 2, 3, 4],
    n4 = [3, 6, 2, 3];
  
  console.log(
    largestPerimeter(n1),
    largestPerimeter(n2),
    largestPerimeter(n3),
    largestPerimeter(n4)
  );
  
  // find largest perimeter of a triangle with sides a, b, c
  // where a + b > c
  