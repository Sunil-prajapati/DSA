var minimumDifference = function(nums, k) {
    if (nums.length < k) return 0; 
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        let currentDiff = nums[i + k - 1] - nums[i]; 
        minDiff = Math.min(minDiff, currentDiff);
    }
    return minDiff;
};
console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918],6))