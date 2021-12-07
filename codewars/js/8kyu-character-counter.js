//better
function validateWord(s) {
    var freq = {};
    s.toLowerCase()
      .split("")
      .forEach(function (s) {
        freq[s] ? freq[s]++ : (freq[s] = 1);
      });
  
    return new Set(Object.values(freq)).size == 1;
  }
  
  //attempt
  function validateWord(s) {
    let dict = {};
    s.toLowerCase()
      .split("")
      .forEach((x) => {
        dict[x] == null ? (dict[x] = 1) : (dict[x] += 1);
      });
    for (let i = 0; i < Object.values(dict).length - 1; i++) {
      if (Object.values(dict)[i + 1] != Object.values(dict)[i]) {
        return false;
      }
    }
    return true;
  }
  console.log(validateWord("abcabc"));
  // validateWord('6dZMdil^twO@hHQGv@cGQbQpf!8ZC7@Ny0w2W&cgmT8ehmq8X&j:Y2KG?uOj^?')