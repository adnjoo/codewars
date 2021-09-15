var sortSentence = function(s) {
    //find highest digit
    s = s.split('')
    console.log(s)

    // for(let i in s){
    //     console.log(s[i][s[i].length-1])
    // }
    //find highest number
    // use dictionary, .order = last char, .word = elements up to but not including last
    // sort by order
    // glue them together by word
};

let s = "is2 sentence4 This1 a3"
sortSentence(s)
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.