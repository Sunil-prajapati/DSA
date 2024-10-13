var reverseWords = function (s) {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length >= 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(" ");
};
console.log(reverseWords("  hello world  "));
