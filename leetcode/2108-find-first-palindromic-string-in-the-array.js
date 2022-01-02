// second way
var firstPalindrome = function (words) {
const palindrome = words.filter(
    (item) => item == item.split("").reverse().join("")
);
if (palindrome.length > 0) {
    return palindrome[0];
} else {
    return "";
}
};

// one way
var firstPalindrome = function (words) {
for (let i of words) if (i == i.split("").reverse().join("")) return i;
return "";
};

let words = ["abc", "car", "ada", "racecar", "cool"];

console.log(firstPalindrome(words));
