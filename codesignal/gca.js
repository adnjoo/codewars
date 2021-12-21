// gca q4
// gca q3 merge


//gca q2
/*
const solution = (words, complex) => {
    // split at capital letters
    let capRegex = /(?=[A-Z])/g;
    let wordsArr = complex.split(capRegex);
    console.log(wordsArr);
}

let words = ["hello", "world", "how", "are", "you"];
let complex = "helloWorldHow";
console.log(
    solution(words, complex)
)
*/

// include delimiter: https://stackoverflow.com/questions/4514144/js-string-split-without-removing-the-delimiters

// gca q1
/*
const solution = arr => {
    let arr2 = []
    for(let i =0;i < arr.length;i++){
        arr2.push(arr[i]+(arr[i+1]||0)+(arr[i-1]||0))
    }
    console.log(arr2)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(arr))
*/
