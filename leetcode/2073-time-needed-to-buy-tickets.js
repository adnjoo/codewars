var timeRequiredToBuy = function (tickets, k) {
  let counter = 0;
  while (tickets[k] > 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] > 0) {
        tickets[i]--;
        counter++;
        if (tickets[i] == 0 && i == k) {
          break;
        }
      }
    }
  }
  return counter;
};

// how long for position k to reach 0
// loop through and reduce - 1, while position at k is > 0

// let a = [5,1,1,1], b =0
let a = [84, 49, 5, 24, 70, 77, 87, 8],
  b = 3;

timeRequiredToBuy(a, b);
