const isPalindrome = (x) =>
  x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
    ? true
    : false;

console.log(isPalindrome("Abba"));

function likes(names) {
  // switch-case next time
  let name = "no one";
  let append = " likes this";
  let append2 = " like this";
  if (names.length == 0) {
    return name + append;
  } else if (names.length == 1) {
    return names[0] + append;
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + append2;
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + append2;
  } else if (names.length > 3) {
    console.log('test')
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + ' others' + append2;
  }
}

