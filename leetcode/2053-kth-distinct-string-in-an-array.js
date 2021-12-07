var kthDistinct = function (arr, k) {
  k -= 1;
  let count = {};
  arr.forEach((el) => {
    count[el] = count[el] + 1 || 1;
  });
  const filteredByKey = Object.keys(
    Object.fromEntries(
      Object.entries(count).filter(([key, value]) => value === 1)
    )
  );
  return filteredByKey[k] != undefined ? filteredByKey[k] : "";
};

let a1 = ["d", "b", "c", "b", "c", "a"],
  k1 = 2;
let a2 = ["aaa", "aa", "a"],
  k2 = 1;
let a3 = ["a", "b", "a"],
  k3 = 3;

console.log(kthDistinct(a1, k1), kthDistinct(a2, k2), kthDistinct(a3, k3));
