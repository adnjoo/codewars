// ooh one liner :)
const isPalindrome = x =>  x.toLowerCase() == x.toLowerCase().split("").reverse().join("") ? true : false
  
console.log(isPalindrome("Abba"));