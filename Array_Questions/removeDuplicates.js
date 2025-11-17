let arr = [1,2,2,3,5,5,6,6,7,7];
// output = [11,1,2,5]
let removeDuplicates = arr => [...new Set(arr.sort((a,b)=>a-b))];

let removeduplicats = (arr) =>{
    let result = []
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
         result.push(arr[i])
        }
    }
    return result
}
console.log("remove duplicates", removeduplicats(arr))