const minCostClimbingStairs = (cost) => {
  let min1 = cost[0],
    min2 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    // whichever is smaller
    let temp = Math.min(min1, min2) + cost[i];
    min1 = min2;
    min2 = temp;
  }
  return Math.min(min1, min2);
};
