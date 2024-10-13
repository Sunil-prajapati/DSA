var majorityElement = function (nums) {
  let myMap = new Map();
  for (let num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }
  let maxValueNumber = -1;
  let element = 0;
  for (let [key, value] of myMap) {
    if (value > maxValueNumber) {
      maxValueNumber = value;
      element = key;
    }
  }
  return element;
};
console.log(majorityElement([3, 3, 4]));
