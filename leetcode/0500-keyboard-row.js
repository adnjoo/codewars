// split then find first row then iterate through each char and check it
// exists in that row, if not flag -> false, if flag -> push into array

// TC should be O(n)

var findWords = function(words) {
    let alpha = ["qwertyuiopQWERTYUIOP","asdfghjklASDFGHJKL","zxcvbnmZXCVBNM"], arr = []
    words.forEach(word=>{
      word=word.split('')
      // find first row
      let row = undefined, i = 0, flag = true
      while(row===undefined){
        if(alpha[i].indexOf(word[0])>-1){
          row = i
        }
        i++
      }
      for(let j = 0; j < word.length; j++){
        if(alpha[row].indexOf(word[j])==-1) {
          flag = false
          break
        }
      }
      //check if capitalized
      if (flag) {
        arr.push(word.join(''))
      }
    })
    return arr
  };
  
  let w1 = ["Hello","Alaska","Dad","Peace"], w2 = ['omk'], w3 = ["adsdf","sfd"]
  

  console.log(
    findWords(w1),
    findWords(w2),
    findWords(w3),
  )