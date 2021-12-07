// other
function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
  }

// attempt
const getEvenNumbers = (x) => x.filter((a) => a % 2 == 0);
