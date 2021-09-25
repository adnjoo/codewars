/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return (factorial(m+n-2)/(factorial(m-1)*factorial(n-1)))
};

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}


// Input: m = 3, n = 7
// (m + n - 2)! / ((m - 1)! * (n - 1)!). 
// (3+7-2)!/((3-1)!*(7-1)!)
// 8! / (2!*6!)
// 40320/ 1440 
// 28
