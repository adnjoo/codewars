var repeatedSubstringPattern = function (s) {
  //get all factors of s.length
  let i = 1,
    arr = [],
    arr2 = [];
  const factors = (number) =>
    [...Array(number + 1).keys()].filter((i) => number % i === 0);
  arr = factors(s.length);
  arr = arr.filter((x) => x != s.length);
  i = 0;
  while (arr2.length < arr.length) {
    arr2.push(s.slice(0, arr[i]));
    i++;
  }
  //   console.log(arr, arr2)
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j].repeat(s.length / arr[j]) == s) return true;
  }
  return false;
};

console.log(
  repeatedSubstringPattern("aba"),
  repeatedSubstringPattern("abab"),
  repeatedSubstringPattern("abcabcabcabc")
);

// find factors: https://www.geeksforgeeks.org/find-divisors-natural-number-set-1/
// KMP algo: https://leetcode.com/problems/repeated-substring-pattern/discuss/94492/KMP-Javascript
// KMP notes: https://www.youtube.com/watch?v=BXCEFAzhxGY&ab_channel=BackToBackSWE