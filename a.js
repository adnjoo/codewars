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

