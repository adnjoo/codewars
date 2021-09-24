//better
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

//first try
const twoHighest = (arr) => {
  if (arr.length < 1) return [];
  if (arr.length == 1) return [arr[0]];
  arr = [...new Set(arr)]; //removes duplicates
  console.log(
    arr.sort((a, b) => {
      return a - b;
    })
  );
  return [arr[arr.length - 1], arr[arr.length - 2]];
};
