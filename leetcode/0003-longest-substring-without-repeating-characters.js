var lengthOfLongestSubstring = function (s) {
    if (s == "") {
      return 0;
    }
    let j = 0,
      max = 0,
      set = [],
      wlength;
    console.log(s);
    for (let i = 0; i < s.length; i++) {
      if (set.indexOf(s[i]) >= 0) {
        while (j < i) {
          // is s[i] not in set?
          if (set.indexOf(s[i]) == -1) {
            break;
          }
          set = set.filter((x) => x !== s[j]);
          j++;
        }
      }
      if (set.indexOf(s[i]) == -1) {
        set.push(s[i]);
        wlength = Math.abs(i - j) + 1;
        if (wlength > max) {
          max = wlength;
        }
      }
    }
    // console.log(set)
    return max;
  };
  
  let s1 = "abcabcbb",
    s2 = "bbbbb",
    s3 = "pwwkew",
    s4 = "dvdf";
  
  console.log(
    lengthOfLongestSubstring(s1),
    lengthOfLongestSubstring(s2),
    lengthOfLongestSubstring(s3),
    lengthOfLongestSubstring(s4)
  );


// guidance https://www.youtube.com/watch?v=4i6-9IzQHwo&ab_channel=MichaelMuinos
  
