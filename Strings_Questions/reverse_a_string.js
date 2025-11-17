
let str = 'Daya';
let rev = str.split('').reverse().join("")
console.log(rev)
const reverseString = (str) =>{
    let rev = ''
    for(let i = str.length-1; i >=0; i--){
        rev += str[i]
    }
    return rev
}
console.log(reverseString(str))

