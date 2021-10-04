var findMiddleIndex = n => {
    var sum = n.reduce((a,b)=>a+b,0)
    var lhs = 0
    for(let i = 0; i< n.length;i++){
        if((sum-n[i])/2==lhs){
            return i;
        }
        lhs+=n[i]
    }
    return -1
};

let nums = [2,3,-1,8,4]
findMiddleIndex(nums)