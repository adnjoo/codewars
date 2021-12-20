// adjacentElementsProduct

function solution(arr) {
    let highest= -1000
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]*arr[i+1]>highest){
            highest = arr[i]*arr[i+1]
        }
    }
    return (highest)
}
