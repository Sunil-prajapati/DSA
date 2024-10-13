var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = s.split("");
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    } else if (!vowels.includes(arr[start])) {
      start++;
    } else if (!vowels.includes(arr[end])) {
      end--;
    }
  }
  return arr.join("");
};
console.log(reverseVowels("IceCreAm"));
