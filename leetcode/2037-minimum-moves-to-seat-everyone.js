let sortInt = (a, b) => a - b;

var minMovesToSeat = function (seats, students) {
  let counter = 0;
  seats.sort(sortInt);
  students.sort(sortInt);
  for (let i in seats) {
    counter += Math.abs(seats[i] - students[i]);
  }
  return counter;
};

// seats, students
let x = [3, 1, 5],
  y = [2, 7, 4];
let x1 = [4, 1, 5, 9],
  y1 = [1, 3, 2, 6];
let x2 = [2, 2, 6, 6],
  y2 = [1, 3, 2, 6];

console.log(minMovesToSeat(x, y));
minMovesToSeat(x1, y1);
minMovesToSeat(x2, y2);
