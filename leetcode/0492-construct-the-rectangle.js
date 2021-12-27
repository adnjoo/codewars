/* hint:
 The W is always less than or equal to the square root of the area, 
 so we start searching at sqrt(area) till we find the result.
*/

var constructRectangle = function (area) {
  let num = Math.floor(Math.sqrt(area));
  if (num * num === area) return [num, num];
  while (num > 0) {
    if (area % num == 0) return [area / num, num];
    num--;
  }
};

let a1 = 4,
  a2 = 100,
  a3 = 37,
  a4 = 122122,
  a5 = 10000000;

console.log(
  // constructRectangle(a1),
  constructRectangle(a2),
  constructRectangle(a3),
  constructRectangle(a4)
);
