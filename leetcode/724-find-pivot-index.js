//better
var pivotIndex = (n) => {
  var sum = n.reduce((a, b) => a + b, 0);
  var lhs = 0;
  for (let i = 0; i < n.length; i++) {
    if ((sum - n[i]) / 2 == lhs) {
      return i;
    }
    lhs += n[i];
  }
  return -1;
};

//first try
var pivotIndex = n => {
  for(let i = 0; i< n.length;i++){
      let rhs = (i,n.slice(i+1).reduce((a,b)=> a+b,0)) //rhs
      let lhs = (i,n.slice(0,i).reduce((a,b)=>a+b,0)) //lhs
      console.log(i,rhs,lhs)
      if(lhs==rhs) return i
  }
  return -1
};

let nums = [1, 7, 3, 6, 5, 6];
// let nums = [1,2,3]
// let nums =[2,1,-1]
// let nums = [-1,-1,0,1,1,0]
console.log(pivotIndex(nums));
