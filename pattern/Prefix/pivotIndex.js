var pivotIndex = function(nums) {
    const sumOfAll = nums.reduce((acc,num) => acc + num,0)
    let leftSum = 0
    for(let i = 0; i < nums.length; i++){
        if(leftSum === sumOfAll - leftSum - nums[i]){
            return i
        }
        leftSum += nums[i]
    }
    return -1
};