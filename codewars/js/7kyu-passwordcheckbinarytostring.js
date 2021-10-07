const decodePass = (arr, bin) => {
  arr = arr.filter(x => {return x == binaryAgent(bin)})
  return arr.length > 0 ? arr[0] : false;
}

const binaryAgent = (str) => {
  var newBin = str.split(" ");
  var binCode = [];

  for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
};

console.log(
  decodePass(
    ["password123", "admin", "admin1"],
    "01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011"
  )
);
