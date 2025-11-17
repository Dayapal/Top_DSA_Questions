let arr = [5, 9, 3, 15, 7]

// brute force 
const bruteMaxElement = (arr) =>{
    let max = arr[0]
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > max){
                max = arr[j]
            }
        }
    }
    return max
}
console.log(bruteMaxElement(arr))


// optimize const
const optimizeMaxElement = (arr) =>{
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log("Opimize answer",optimizeMaxElement(arr))


const findMaxReduce = (arr) =>
  arr.reduce((max, cur) => (cur > max ? cur : max), arr[0]);

console.log(findMaxReduce([5, 9, 3, 15, 7])); // 15
