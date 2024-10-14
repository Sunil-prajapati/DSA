var numIdenticalPairs = function (nums) {
  let countMap = new Map();
  let goodPairs = 0;
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  for (let count of countMap.values()) {
    if (count > 1) {
      goodPairs += (count * (count - 1)) / 2;
    }
  }
  return goodPairs;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
