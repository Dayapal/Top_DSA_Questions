/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for(let i = 0; i < s.length-1; i++){
        if(obj[s[i]] >= obj[s[i+1]]){
            result += obj[s[i]]
        }else{
            result -= obj[s[i]]
        }

    }

    result += obj[s[s.length-1]]
   return  result

    
};