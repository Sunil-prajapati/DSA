// longest subArray which is sum is less than equal to K
function maxSubArrayLen(nums, k) {
  let left = 0,
    right = 0,
    sum = 0,
    maxLen = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum > k) {
      sum -= nums[left];
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return { maxLen };
}
console.log(maxSubArrayLen([2, 5, 1, 7, 10], 14));
