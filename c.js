// return the minimum number of positive deci-binary numbers
// needed so that they sum up to n.

// const minPartitions = (n) => {
//   // change to digits array
//   n = String(n).split("");
//   let regex = /[2-9]/;
//   let check = false;
//   for (i in n) {
//     if (n[i].match(regex)) {
//       check = true;
//     }
//   }
//   //if number contains only 1s and 0s, then return 1 e.g. 101010101
//   if (!check) {
//     return 1;
//   }
//   //else find highest digit
//   n = n.map((x)=>Number(x)).sort()
//   console.log(n);
//   return n[n.length-1]
//   // else return highest digit in n
// };

// console.log(minPartitions(32));
// console.log(minPartitions(82734));
// console.log(minPartitions(27346209830709182346));

// if n = 10
// min is  10

// max is 9

// Example 1:

// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
// Example 2:

// Input: n = "82734"
// Output: 8
// Example 3:
// first # 11111, 11111, 10111, 10101, 10100, 10100, 10100, 10000

// Input: n = "27346209830709182346"
// Output: 9

// var arr = [11111, 11111, 10111, 10101, 10100, 10100, 10100, 10000];
// console.log(arr.reduce((a, b) => a + b));
