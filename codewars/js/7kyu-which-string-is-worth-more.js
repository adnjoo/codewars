const highestValue = (a, b) =>
  a.split("").reduce((c, d, i) => c + d.codePointAt(0), 0) >=
  b.split("").reduce((e, f, i) => e + f.codePointAt(0), 0)
    ? a
    : b;

console.log(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"));
// , "KkLlMmNnOoPp4567
