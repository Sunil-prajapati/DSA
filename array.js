const strArray = ["a", "b", "c", "d", "e", "f"];
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// =============================== create our own custom array and do manipulation ==============================

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    const firstItem = this.data[0];
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
}
const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
// console.log(myNewArray.get(1));
// console.log(myNewArray.pop());
// console.log(myNewArray.shift());

// challenge==
function reverse(str) {
  let newArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newArray.push(str[i]);
  }
  return str === newArray.join("");
  // return newArray.join("");
}

// ==== sentence capitalization =====
function sentenceCapitalization(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// ===== chunks ====
function chunks(arr, number) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += number) {
    newArray.push(arr.slice(i, i + number));
  }
  return newArray;
}
console.log(chunks([2, 3, 1, 4, 5, 6, 7, 8, 9, 10], 2));
