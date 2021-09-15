// method 1
let minPartitions = n => String(n).split('').map(x => +x).reduce((x, y) => x > y ? x : y);

// method 2
// const minPartitions = (n) => Math.max(...String(n));

// method 3
// const minPartitions = (n) => {
//     n = String(n).split('')
//     // console.log(n)
//     let regex = /[2-9]/
//     let check = false;
//     for(i in n){
//         if(n[i].match(regex)){
//             check = true;
//             break;
//         }
//         // console.log(n[i])
//     }
//     if(!check){
//         return 1;
//     }
//     //find highest digit
//     n=n.map((x)=>Number(x)).sort()
//     // console.log(n)
//     return n[n.length-1]
// };

// testing
// console.log(minPartitions(32))
// console.log(minPartitions(82734))
console.log(minPartitions(27346209830709182346))
console.log(minPartitions(1010101010))

// explanation
// 82734 would be built of the following deci-binary numbers added together 
// let arr = [11111, 11111, 10111, 10101, 10100, 10100, 10100, 10000];

// console.log(arr.reduce((a, b) => a + b));

//n = 27346209830709182346

//n = 1010101101011001100110101
//n = 21010101101011001100110101