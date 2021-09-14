//leetcode easy
const flipAndInvertImage =(image) => {
    let arr = []
    for(i in image){
      //reversed row
      let x = image[i].reverse()
      for(j in x){
        if(x[j]==0){
          x[j] =1
        } else {
          x[j]=0
        }
      }
      arr.push(x)
    }
    // console.log(arr)
    return arr
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
