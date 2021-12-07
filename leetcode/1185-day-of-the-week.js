var dayOfTheWeek = function (day, month, year) {
    let x = `${month}/${day}/${year}`;
    let d = new Date(x);
    var options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(d);
  };
  
  let d1 = 31,
    m1 = 8,
    y1 = 2019,
    d2 = 18,
    m2 = 7,
    y2 = 1999,
    d3 = 15,
    m3 = 8,
    y3 = 1993;
  
  console.log(
    dayOfTheWeek(d1, m1, y1),
    dayOfTheWeek(d2, m2, y2),
    dayOfTheWeek(d3, m3, y3)
  );
  