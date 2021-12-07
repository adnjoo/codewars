/**
 * @param {number} num
 * @return {number}
 */

var findComplement = (n) =>
  parseInt(
    (n >>> 0)
      .toString(2)
      .split("")
      .map((x) => (x == "0" ? "1" : "0"))
      .join(""),
    2
  );
