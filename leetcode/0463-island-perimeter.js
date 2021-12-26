// +4 if land
// check bottom and right and remove 2 per intersection
// islands * 4 - neighbours * 2
// 28 - 6*2 = 16

var islandPerimeter = function(grid) {
    let counter = 0, neighbors = 0
    //traverse row
    for(let i = 0; i < grid.length;i++){
        //traverse column
        for(let j = 0; j < grid[0].length;j++){
          if(grid[i][j]==1){
            counter+=1
            //check bottom cell
            if(i + 1 < grid.length && grid[i+1][j]==1){
              neighbors+=1
            }
            // //check right cell
            if(j+1<grid[0].length && grid[i][j+1]==1){
              neighbors+=1
            }
          }
        }
      }
      // console.log(counter,neighbors)
      return counter*4 - neighbors*2
  };
  
  let g1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]], g2 = [[1]], g3= [[1,0]]
  
  console.log(
    islandPerimeter(g1),
    islandPerimeter(g2),
    islandPerimeter(g3),
  )
  
  
  // advice https://leetcode.com/problems/island-perimeter/discuss/95001/clear-and-easy-java-solution