Counter of neighbor ones
https://www.codewars.com/kata/56ec1e8492446a415e000b63

// shorter method
// const onesCounter = inp => inp.join('').split('0').map(e=>e.length).filter(e=>e);
// const x = i => i.join('').split('0').map(e=>e.length).filter((e=>e))

//first try
function onesCounter(input) {
  let arr = [],
    counter = 0;
  for (i in input) {
    if (input[i] == 1) {
      counter++;
    } else if (input[i] == 0) {
      arr.push(counter);
      counter = 0;
    }
  }
  if (input[+i + 1] == undefined) arr.push(counter);
  // console.log(arr)
  return arr.filter((x) => x !== 0);
}

// onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])
console.log(
  x([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])
)
// onesCounter([0, 0, 0, 1, 0, 0, 1, 1]);
//  [3, 1, 2]
