var number = function(b){
    let counter = 0
    for (let i in b){
      counter += b[i][0] - b[i][1]
    }
    return counter
  }
  
  const number = b => b.map(x=>x[0]-x[1]).reduce(a,b=>a+b)
  
  //const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
  