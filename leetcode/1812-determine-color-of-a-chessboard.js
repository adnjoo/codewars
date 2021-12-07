var squareIsWhite = function (coord) {
  let r1 = /[aceg]/;
  let white = coord.includes(coord.match(r1));
  if ((white && coord[1] % 2 > 0) || (!white && coord[1] % 2 == 0)) {
    return false;
  }
  return true;
};
let c1 = "a1";
let c2 = "h3";
let c3 = "c7";
console.log(squareIsWhite(c1));
console.log(squareIsWhite(c2));
console.log(squareIsWhite(c3));

// a c e g and odd == black
// a c e g and even == white
// if not aceg must be bdfh
// b d f h and odd == white
// b d f h and even == black
