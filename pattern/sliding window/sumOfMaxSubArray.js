var sumOfMaxSubArray = function(nums,k){
    let maxSum = 0, winSum = 0;
    for(let i = 0; i < k; i++){
        winSum+= nums[i]
    }
    for(let end = k; end < nums.length; end++){
        winSum+= nums[end] - nums[end - k]
        maxSum = Math.max(maxSum,winSum)
    }
    return maxSum
}
console.log(sumOfMaxSubArray([1,9,-1,-2,7,3,-1,2],4))
