// time complexity: O(n^2)

var maximumDifference = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i];
      if (diff > max) {
        max = diff;
        console.log(max, diff, i, j);
      }
    }
  }
  return max === 0 ? -1 : max;
};

let n1 = [7, 1, 5, 4],
  n2 = [9, 4, 3, 2],
  n3 = [1, 5, 2, 10],
  n4 = [
    999, 997, 980, 976, 948, 940, 938, 928, 924, 917, 907, 907, 881, 878, 864,
    862, 859, 857, 848, 840, 824, 824, 824, 805, 802, 798, 788, 777, 775, 766,
    755, 748, 735, 732, 727, 705, 700, 697, 693, 679, 676, 644, 634, 624, 599,
    596, 588, 583, 562, 558, 553, 539, 537, 536, 509, 491, 485, 483, 454, 449,
    438, 425, 403, 368, 345, 327, 287, 285, 270, 263, 255, 248, 235, 234, 224,
    221, 201, 189, 187, 183, 179, 168, 155, 153, 150, 144, 107, 102, 102, 87,
    80, 57, 55, 49, 48, 45, 26, 26, 23, 15,
  ];

console.log(
  maximumDifference(n1),
  maximumDifference(n2),
  maximumDifference(n3),
  maximumDifference(n4)
);
