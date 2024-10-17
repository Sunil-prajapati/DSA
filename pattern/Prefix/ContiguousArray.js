var findMaxLength = function(nums) {
    let newMap = new Map()
    newMap.set(0,-1)
    let maxLength = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        count += nums[i] === 1 ? 1 : -1
        if(newMap.has(count)){
            maxLength = Math.max(maxLength, i - newMap.get(count))
        }else{
            newMap.set(count,i)
        }
    }
    return {maxLength,newMap}
};
console.log(findMaxLength([0,1]))