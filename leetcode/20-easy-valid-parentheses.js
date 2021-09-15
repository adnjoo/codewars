var isValid = function (s) {
  //   remove (), [], {}
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
    console.log(s);
  }
  return s.length > 0 ? false : true;
  //   console.log('s', s.length)
};
