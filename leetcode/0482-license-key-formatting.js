// 80 ms
var licenseKeyFormatting = function (s, k) {
  s = s.replaceAll("-", "").toUpperCase().split("");
  // Loop through array backwards and decrement by value of K
  for (let i = s.length - 1 - k; i >= 0; i -= k) s[i] = s[i] + "-";
  return s.join("");
};

// 192ms can be improved
// var licenseKeyFormatting = function(s, k) {
//   s=s.replaceAll('-','')
//   let pointer = s.length, arr = []
//   // how many dashes
//   let dashes = Math.ceil(s.length / k)
//   let i = 0;
//   while(i<dashes){
//     let temp = pointer - k
//     if (temp < 0) temp = 0
//     arr.unshift(s.slice(temp,pointer))
//     pointer-=k
//     i++
//   }
//   return arr.join('-').toUpperCase()
// };

let s1 = "5F3Z-2e-9-w",
  k1 = 4,
  s2 = "2-5g-3-J",
  k2 = 2,
  s3 = "2-4A0r7-4k",
  k3 = 3;
// "24-A0R-74K"

console.log(
  // licenseKeyFormatting(s1,k1),
  // licenseKeyFormatting(s2,k2),
  licenseKeyFormatting(s3, k3)
);
