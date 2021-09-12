// function isPalindrome(x) {
//   // your code here
//   x = x.toLowerCase();
//   return (x == x.split("").reverse().join("") ? true : false)
// }
// one liner?
const isPalindrome = x =>  x.toLowerCase() == x.toLowerCase().split("").reverse().join("") ? true : false
  
console.log(isPalindrome("Abba"));
  
