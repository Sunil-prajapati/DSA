var countGoodSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i <= s.length - 3; i++ ){
        const sub = s.substring(i, i+3)
        console.log(sub)
        const unique = new Set(sub)
        if(unique.size === 3){
            count++
        }
    }
    return count
};
console.log(countGoodSubstrings("xyzzaz",3))