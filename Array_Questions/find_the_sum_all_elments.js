let arr = [1,2,3,4,5]
// let allSum = arr.reduce((total,num) => total + num, 0)
// console.log(allSum)

const allsum = (arr) =>{
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(allsum(arr))