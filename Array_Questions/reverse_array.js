let arr = [2,5,12,3,51,10]

let rev_arr = arr.reverse(arr)
console.log("reverse arr", rev_arr)
const reverseArr = (arr) =>{
    let rev = []
    for(let i = arr.length-1; i >=0; i--){
        rev.push(arr[i])

    }
    return rev
}
// console.log( 'rever arraya',reverseArr(arr))