const removeOuterParentheses = (s) => {
    console.log(s)
    s=s.split('')
    // remove if ( not follow by )
    let i = 0 ;
    while(i<s.length){
        // console.log(s[i], i )
        // console.log(s[i], s[i+1])
        if(s[i]=='(' && s[i+1]=='(' || s[i]==')' && s[i+1]==')'){
            console.log('test', i)
            s.splice(i,1)
            i--
        }
        i++
    }
    console.log(s)
};

let s = "(()())(())"
let s2 = '(()())(())(()(()))'

removeOuterParentheses(s)
removeOuterParentheses(s2)
// Input: s = "(()())(())"
// Output: "()()()"
