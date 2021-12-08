var uniqueMorseRepresentations = function (words) {
    let morse = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let arr = [];
    words.forEach((el) => {
      let str = "";
      el.split("").forEach((char) => {
        str = str.concat(morse[alpha.indexOf(char)]);
      });
      arr.push(str);
    });
    // remove duplicates
    return [...new Set(arr)].length;
  };
  let w1 = ["gin", "zen", "gig", "msg"],
    w2 = ["a"];
  
  console.log(uniqueMorseRepresentations(w1), uniqueMorseRepresentations(w2));
  