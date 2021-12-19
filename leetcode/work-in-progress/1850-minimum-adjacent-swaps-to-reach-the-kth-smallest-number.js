// first try

// helper function
const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };
  
    permute(inputArr);
    // removes duplicates
    let count = {};
    result.forEach((y) => {
      count[y] = count[y] + 1 || 1;
    });
    return Object.keys(count);
  };
  
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }
  
  
  var getMinSwaps = function (num, k) {
    let arr = [num];
    num = num.split("");
    let digitCounter = 2;
    while (arr.length <= k) {
      let tempnum = [...num];
      let sub = tempnum.slice(tempnum.length - digitCounter, tempnum.length);
      sub = permutator(sub);
      // remove commas, and sort
      sub.forEach((y, index) => {
        sub[index] = y.replace(/,/g, "");
      });
      sub = sub.sort((a, b) => {
        return a - b;
      });
      for (let i = 0; i < digitCounter; i++) {
        tempnum.pop();
      }
   
      for (let i = 0; i < sub.length; i++) {
        let tempnum2 = tempnum.join("") + sub[i];
        if (arr.indexOf(tempnum2) == -1 && tempnum2 > arr[0]) {
          arr.push(tempnum2);
        }
      }
  
      digitCounter++;
    }
    let swaps = 0;
    let final = arr[k]
    num = num.join('')
    let counter = 0
    console.log(num,final)
    // swap time
    while (num!=final){
      if(num[counter]!=final[counter]){
        console.log(counter)
        let hold = num[counter]
        num = num.replaceAt(counter, num[counter+1])
        num = num.replaceAt(counter+1, hold)
        counter=0
        swaps++
      }
      counter++
    }
    console.log('swaps',swaps)
  };
  
  let num1 = "5489355142",
    k1 = 4;
  // Output: 2
  // Explanation: The 4th smallest wonderful number is "5489355421". To get this number:
  // - Swap index 7 with index 8: "5489355142" -> "5489355412"
  // - Swap index 8 with index 9: "5489355412" -> "5489355421"
  
  let num2 = "11112",
    k2 = 4;
  // Output: 4
  // Explanation: The 4th smallest wonderful number is "21111". To get this number:
  // - Swap index 3 with index 4: "11112" -> "11121"
  // - Swap index 2 with index 3: "11121" -> "11211"
  // - Swap index 1 with index 2: "11211" -> "12111"
  // - Swap index 0 with index 1: "12111" -> "21111"
  
  let num3 = "00123",
    k3 = 1;
  // Output: 1
  // Explanation: The 1st smallest wonderful number is "00132". To get this number:
  // - Swap index 3 with index 4: "00123" -> "00132"
  
  console.log(
    // getMinSwaps(num1, k1),
    getMinSwaps(num2, k2),
  );
  
  // helper functions:
  // permutation function https://stackoverflow.com/questions/9960908/permutations-in-javascript
  