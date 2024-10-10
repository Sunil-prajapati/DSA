function findFirstOccurrence(haystack, needle) {
  if (needle === "") return 0;
  let strLength = haystack.length;
  let subStringLength = needle.length;
  for (let i = 0; i <= strLength - subStringLength; i++) {
    let j = 0;
    while (j < subStringLength && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === subStringLength) {
      return i;
    }
  }
  return -1;
}
console.log(findFirstOccurrence("sadbutsad", "sad"));
