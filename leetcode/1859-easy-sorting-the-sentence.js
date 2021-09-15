var sortSentence = function (s) {
  //find highest digit
  var num = s
    .replace(/[^0-9]/g, "")
    .split("")
    .sort((a, b) => {
      return b - a;
    })[0];
  let arr = [];
  s = s.split(" ");
  // console.log(num, s)
  for (let i = 1; i < +num + 1; i++) {
    //find word that contains number
    arr.push(s.find((x) => x.includes(i)).slice(0, -1));
  }
  return arr.join(" ");
};
