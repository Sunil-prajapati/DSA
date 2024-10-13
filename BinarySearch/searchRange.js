var searchRange = function (nums, target) {
  let newArray = [];
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      newArray.push(mid);
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return newArray;
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
