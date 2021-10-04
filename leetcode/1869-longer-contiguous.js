function checkZeroOnes(str) {
    let dict = {
        0: 0,
        1: 0,
    };
    var s = str.match(/([01])\1*/g).map((x) => {
        return [x.charAt(0), x.length];
    });
    for (let i in s) {
        if (s[i][1] > dict[s[i][0]]) dict[s[i][0]] = s[i][1];
    }
    return dict[1] > dict[0];
}

let s = "110100011010";
letterCount(s);


// let s = "1101";
// let s = "111000";
// let s = "110100010"
// let s = "110100011010";
// let s= "111000"
// let s = "011000111"
// let s = "0111010011"

// checkZeroOnes();

// 1,1,0,1