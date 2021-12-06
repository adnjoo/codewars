var nearestValidPoint = function (x, y, points) {
  let valid = [],
    distance = [];
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] == x || points[i][1] == y) {
      valid.push(i);
    }
  }
  for (let j = 0; j < valid.length; j++) {
    distance.push(
      Math.abs(x - points[valid[j]][0]) + Math.abs(y - points[valid[j]][1])
    );
  }
  let flag = 0;
  for (let k = 0; k < distance.length; k++) {
    if (distance[k] < distance[flag]) {
      // console.log('flag',flag,k)
      flag = k;
    }
  }
  // console.log(valid,distance,valid[flag])
  if (valid.length > 0) {
    return valid[flag];
  } else {
    return -1;
  }
};

let x1 = 3,
  y1 = 4,
  p1 = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ],
  x2 = 3,
  y2 = 4,
  p2 = [[3, 4]],
  x3 = 3,
  y3 = 4,
  p3 = [[2, 3]];

let x4 = 23,
  y4 = 6,
  p4 = [
    [21, 23],
    [26, 9],
    [19, 8],
    [18, 6],
    [25, 27],
    [11, 7],
    [30, 22],
    [27, 1],
    [28, 20],
    [10, 14],
    [24, 25],
    [6, 20],
    [6, 31],
    [14, 29],
    [23, 19],
    [9, 17],
    [5, 5],
    [23, 12],
    [24, 8],
    [23, 23],
    [10, 4],
    [13, 16],
    [4, 6],
    [2, 19],
    [28, 7],
    [2, 22],
    [26, 30],
    [20, 11],
    [26, 4],
    [22, 3],
  ];

console.log(
  // nearestValidPoint(x1,y1,p1),
  // // Output: 2
  // nearestValidPoint(x2,y2,p2),
  // nearestValidPoint(x3,y3,p3),
  nearestValidPoint(x4, y4, p4)
);

// The Manhattan distance between two points (x1, y1) and (x2, y2) is
// abs(x1 - x2) + abs(y1 - y2).
