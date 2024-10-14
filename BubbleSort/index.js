let arr = [12, 4, 6, 34, 12, 56, 23, 10, 3, 4, 5];

const bubbleSort = () => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort(arr));
