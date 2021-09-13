//better
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

// 5 kyu
const moveZeros = (arr) => {
  console.log('arr given', arr)
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.push(...arr.splice(i, 1));
      console.log('idx',i)
      console.log('arr after',arr)
      i--;
      // if all idx after i are 0 then return
      let small = arr.slice(i+1)
      console.log(small)
      if(small.reduce((a,b)=>{return a+b})==0){
        return arr
      }
    }
    i++;
  }
  console.log(arr);
};

//better
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

//try
function arrayMadness(a, b) {
  let sum1 = 0,
    sum2 = 0;
  for (i of a) {
    sum1 += i * i;
  }
  for (i of b) {
    sum2 += i * i * i;
  }
  return sum1 > sum2
}


//better
function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}

//first try
function bigToSmall(arr) {
  let arr2 = [];
  for (i in arr) {
    arr2 = arr2.concat(arr[i]);
  }
  arr2.sort((a, b) => b - a);
  arr2=arr2.join('>');
  console.log(arr2);
  return arr2;
}

//better
function mergeArrays(a, b) {
  // your code here
  var returnArray = [];
  var counter = 0;
  while (a[counter] || b[counter] ){
    if(a[counter]){
      returnArray.push(a[counter]);
    }
    if(b[counter]){
      returnArray.push(b[counter]);
    }
    counter++;
    
   }
   return returnArray;
}
//better
function mergeArrays(a, b) {
  let j = [],
      longest = a.length > b.length ? a:b;
  for (var i=0; i<longest.length; i++){
    if (a[i]) j.push(a[i])
    if (b[i]) j.push(b[i])
  }
  return j
}
//can improve
function mergeArrays(a, b) {
  console.log(a,b)
  //2 different lengths
  let arr = [];
  let counter = 1;
  while (a.length > 0 || b.length > 0) {
//     console.log('arr is', arr)
    if (counter % 2 > 0) { //odd
      //delete from first array
      if(a.length>0){
        arr.push(a.shift());
      } else {
        arr.push(b.shift());
      }
      counter++
    } else {
      if(b.length>0){
        arr.push(b.shift());
      } else {
        arr.push(a.shift());
      }
      counter++
    }
  }
  return arr;
}

//better
const paintLetterboxes = (start, end) => {
  let res = Array(10).fill(0);
  for (let i = start; i <= end; i++) {
    for (let n of (i + '')) {
      res[n]++;
    }
  }
  return res;
}


var paintLetterboxes = function (s, e) {
  //create object
  let obj = {};
  for (i = 0; i < 10; i++) {
    // console.log(i)
    obj[i] = 0;
  }
  // console.log(obj)
  //loop from s to e
  for (i = s; i <= e; i++) {
    let x = i.toString().split("");
    for (j in x) {
      obj[x[j]]++;
    }
  }
  // console.log(obj);
  return Object.values(obj);
};

function nameShuffle(str){
  return str.split(' ').reverse().join(' ')
}

function nameShuffle(str){
  var name = str.split(' ');
  return name[1] + ' ' + name[0];
}

//The ^ operator is the bitwise XOR operator. To square a value, use Math.pow:

//practice
function divide(weight) {
  return !(weight % 2);
}
console.log(divide(5));
console.log(divide(4));

//ergo 1 is true, 0 is false

// not 1 is false
console.log(!1);

//watermelon
function divide(weight){
    if(weight == 2){
        return false
    } else if (weight % 2 > 0) {
        return false
    } else {
        return true
    }
}
//alternative
function divide(weight){
  return weight > 2 && !(weight % 2);
}

//boxlines
function f(x, y, z) {
    return (x + 1) * (y + 1) * z + (x + 1) * y * (z + 1) + x * (y + 1) * (z + 1);
}

//isPalindrome
const isPalindrome = (x) =>
  x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
    ? true
    : false;

console.log(isPalindrome("Abba"));

//who likes it?
function likes(names) {
  let name = "no one";
  let append = " likes this";
  let append2 = " like this";
  if (names.length == 0) {
    return name + append;
  } else if (names.length == 1) {
    return names[0] + append;
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + append2;
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + append2;
  } else if (names.length > 3) {
    console.log('test')
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + ' others' + append2;
  }
}

