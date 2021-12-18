var isRectangleOverlap = function (rec1, rec2) {
  return (
    rec1[0] < rec2[2] &&
    rec1[2] > rec2[0] &&
    rec1[1] < rec2[3] &&
    rec1[3] > rec2[1]
  );
};

let rec1 = [0, 0, 2, 2],
  rec2 = [1, 1, 3, 3],
  rec3 = [0, 0, 1, 1],
  rec4 = [1, 0, 2, 1],
  rec5 = [0, 0, 1, 1],
  rec6 = [2, 2, 3, 3];

console.log(
  isRectangleOverlap(rec1, rec2),
  isRectangleOverlap(rec3, rec4),
  isRectangleOverlap(rec5, rec6)
);
