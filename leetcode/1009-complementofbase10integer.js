var bitwiseComplement = (n) =>
  parseInt(
    (n >>> 0)
      .toString(2)
      .split("")
      .map((x) => (x == "0" ? "1" : "0"))
      .join(""),
    2
  );

let n1 = 5,
  n2 = 7,
  n3 = 10;
console.log(
  bitwiseComplement(n1),
  bitwiseComplement(n2),
  bitwiseComplement(n3)
);
