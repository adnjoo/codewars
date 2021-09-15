const removeOuterParentheses = (s) => {
    s=s.split('')
    let arr =[]
    let counter = 0
    let left = 0, right = 0

    for(let i =0;i<s.length;i++){
        if(s[i]=='('){
            left++
        }
        if(s[i]==')'){
            right++
        }
        if(left==right && left > 0){
            left=0
            right=0
            arr.push(s.slice(counter,i+1))
            counter = i +1 
        }
    }
    for (i in arr){
        arr[i].pop()
        arr[i].shift()
    }
    return ('arr', arr.join('').replace(/,/g,''))
};

//s will be valid parentheses string
// valid parens has equal number of left and right parens

let s3 = "(()())(())(()(()))"
removeOuterParentheses(s3)

// (()())(())(()(()))
// 1 (()()) 2 (()) 3 (()(()))

// when left = right parens split

//1 left 111 right 111
