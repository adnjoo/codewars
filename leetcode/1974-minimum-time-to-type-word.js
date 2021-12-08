var minTimeToType = function (word) {
    word = word.split("");
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let counter = 0;
    let pointer = "a";
    // find distance from a to word[i] both cw and ccw, take the minimum
    for (let i in word) {
      // cw | ccw | indexof letter, pointer
      let cw = Math.abs(alpha.indexOf(word[i]) - alpha.indexOf(pointer));
      // +1 to type char pointer is on
      counter += Math.min(cw, Math.abs(26 - cw)) + 1; 
      pointer = word[i];
    }
    return counter;
  };
  

minTimeToType("abc");
minTimeToType("bza");
minTimeToType("zjpc");
