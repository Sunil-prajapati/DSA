// question [2,7,11,15] output should be sum of two number is equal to 9 
function twoSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === sum) {
      return [i, i + 1];
    }
  }
}
console.log(twoSum([2, 7, 11, 15, 4, 4], 8));
