const makeDict = (x) => {
    let count = {};
    x.forEach((el) => {
      count[el] = count[el] + 1 || 1;
    });
    return count;
  };
  
  var countWords = function (w1, w2) {
    let c1 = makeDict(w1);
    let c2 = makeDict(w2);
    let counter = 0;
    // if value is 1 in c1 and c2 count ++
    for (let i = 0; i < Object.keys(c1).length; i++) {
      if (c1[Object.keys(c1)[i]] == 1 && c2[Object.keys(c1)[i]] == 1) {
        counter++;
      }
    }
    return counter;
  };
  
  let w1 = ["leetcode", "is", "amazing", "as", "is"],
    w2 = ["amazing", "leetcode", "is"],
    w3 = ["b", "bb", "bbb"],
    w4 = ["a", "aa", "aaa"],
    w5 = ["a", "ab"],
    w6 = ["a", "a", "a", "ab"];
  
  console.log(
    countWords(w1, w2),
    countWords(w3, w4),
    countWords(w5, w6),
    countWords(w2, w1)
  );
  