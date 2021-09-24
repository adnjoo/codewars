//shorter way
const sexyName =name => {
  const n = [...name.toUpperCase()].reduce((a, b) => a + (SCORES[b] || 0), 0)
  return n <= 60 ? 'NOT TOO SEXY' : n <= 300 ? 'PRETTY SEXY' : n <= 599 ? 'VERY SEXY' : 'THE ULTIMATE SEXIEST' 
}

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

//first try
function sexyName(name) {
  let sum = 0;
  name = name.toUpperCase().split("");
  for(i in name){
    if(scores[name[i]]== undefined){
      continue
    }
    sum+=scores[name[i]]
  }
  console.log(sum);
  switch (true) {
    case sum <= 60:
      return "NOT TOO SEXY";
    case sum <= 300:
      return "PRETTY SEXY";
    case sum <= 599:
      return "VERY SEXY";
    case sum >= 600:
      return "THE ULTIMATE SEXIEST";
  }
}

console.log(sexyName("DONALD TRUMP"));
