// A stack is linear data structure that allows LIFO
// in stack we also have same kind of node which we have in linked list
// example: {
//     value:1,
//     next:null,
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }
}

const theStack = new Stack(9);
console.log(theStack);
