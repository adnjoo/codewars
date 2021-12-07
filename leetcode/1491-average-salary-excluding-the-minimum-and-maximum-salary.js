var average = function (salary) {
  salary = salary.sort((a, b) => a - b);
  let sum =
    salary.reduce((a, b) => a + b) - salary[0] - salary[salary.length - 1];
  return sum / (salary.length - 2);
};

let s = [4000, 3000, 1000, 2000],
  s2 = [1000, 2000, 3000],
  s3 = [6000, 5000, 4000, 3000, 2000, 1000],
  s4 = [8000, 9000, 2000, 3000, 6000, 1000],
  s5 = [
    25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
    40000,
  ];

console.log(average(s), average(s2), average(s3), average(s4), average(s5));
