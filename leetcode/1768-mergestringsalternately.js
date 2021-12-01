var mergeAlternately = function (w1, w2) {
  let length = w1.length + w2.length;
  w1 = w1.split("");
  w2 = w2.split("");
  let w3 = [];
  let alternator = true;
  while (w3.length < length) {
    if (alternator) {
      w3.push(w1.shift());
      alternator = false;
      if (w2.length == 0) {
        alternator = true;
      }
    } else if (!alternator) {
      w3.push(w2.shift());
      alternator = true;
      if (w1.length == 0) {
        alternator = false;
      }
    }
  }
  return w3.join("");
};

(x1 = "abc"), (y1 = "pqr");
(x2 = "ab"), (y2 = "pqrs");
(x3 = "abcd"), (y3 = "pq");

console.log(mergeAlternately(x1, y1));
mergeAlternately(x2, y2);
mergeAlternately(x3, y3);
