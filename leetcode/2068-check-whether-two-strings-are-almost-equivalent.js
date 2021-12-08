const makeDict = (x) => {
    let count = {};
    x = x.split("").forEach((el) => {
      count[el] = count[el] + 1 || 1;
    });
    return count;
  };
  
  var checkAlmostEquivalent = function (w1, w2) {
    let c1 = makeDict(w1);
    let c2 = makeDict(w2);
    console.log(c1, c2);
    let flag = true;
    for (let i = 0; i < Object.keys(c1).length; i++) {
      if (Math.abs(c1[Object.keys(c1)[i]] - (c2[Object.keys(c1)[i]] || 0) > 3)) {
        flag = false;
      }
    }
    for (let i = 0; i < Object.keys(c2).length; i++) {
      if (Math.abs(c2[Object.keys(c2)[i]] - (c1[Object.keys(c2)[i]] || 0) > 3)) {
        flag = false;
      }
    }
    return flag;
  };
  
  console.log(
    checkAlmostEquivalent("aaaa", "bccb"),
    // checkAlmostEquivalent("bccb", "aaaa"),
    checkAlmostEquivalent("abcdeef", "abaaacc"),
    checkAlmostEquivalent("cccddabba", "babababab")
  );
  
  // use dictionary
  