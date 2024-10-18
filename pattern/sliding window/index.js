var sumOfMaxSubArray = function(array,k){
    let maxSum = 0
    for(let i = 0; i <= array.length - k; i++){
        let winSum = 0
        for(let j = i; j < i + k; j++){
            winSum += array[j]
        }
        maxSum = Math.max(maxSum,winSum)
    }
    return maxSum
}
// console.log(sumOfMaxSubArray([1,9,-1,-2,7,3,-1,2],4))
// TC : n*k

var MaxAvgOfSubArray = function(nums,k){
    if(k > nums.length) return 0
    let maxAvg = 0
    for(let i = 0; i <= nums.length - k; i++){
        let winSumAvg = 0
        for(j = i; j < i + k; j++){
            winSumAvg+= nums[j]
        }
        let average = winSumAvg / k
        maxAvg = Math.max(maxAvg,average)
    }
    return maxAvg

}
console.log(MaxAvgOfSubArray([-1],1))