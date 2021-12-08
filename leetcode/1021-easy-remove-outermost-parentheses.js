const removeOuterParentheses = (s) => {
  // first split the string
  s = s.split("");
  // console.log(s)
  let counter = 0;
  let arr = [];
  let left = 0,
    right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left++;
    }
    if (s[i] == ")") {
      right++;
    }
    // valid parentheses have same left and right number of parens
    if (left == right && left > 0) {
      arr.push(s.slice(counter, i + 1));
      counter = i + 1;
    }
  }
  for (let i in arr) {
    arr[i].pop();
    arr[i].shift();
  }
  return arr.join("").replace(/,/g, "");
};

let s2 = "(()())(())(()(()))";
removeOuterParentheses(s2);

// s2= (()())(())(()(()))
// 1 (()()) 2 (())  3 (()(()))
// 1 ()() 2 ()  3 ()(())

// number 1: 2 left + 1 = 3 left
// 3 right

s3 = "(()())(())";
removeOuterParentheses(s3);
// 1 (()()) 2 (())
// 1 ()() 2 ()

// left 111
// right  111
// left 11
// right 11

// ()()

// left 1
// right 1
// left 1
// right 1
