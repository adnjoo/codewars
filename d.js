var sortSentence = function(s) {
    //find highest digit
    var num = s.replace(/[^0-9]/g,'').split('').sort((a,b)=>{return b-a})[0];
    let arr = []
    s=s.split(' ')
    // console.log(num, s)
    for(let i =1;i<+num+1;i++){
        //find word that contains number
        arr.push(s.find(x=>x.includes(i)).slice(0,-1))
    }
    return arr.join(' ')
};

// var array = ["123", "456", "#123"];
// var el = array.find(a =>a.includes("#"));
// console.log(el)

let s = "is2 sentence4 This1 a3"
console.log(

    sortSentence(s)
    )
    // Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.