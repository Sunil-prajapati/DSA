// Linked list is linear data structure where elements called nodes,
// are not stored contiguously in memory instead,
// each node contains data and reference, or link, to the next node in sequence
// first element in head and last element is tail

// ========= example of node look like:

const node = {
  value: 10,
  next: null,
};

// first node created
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// first linked list
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // in case of null value
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.head) return null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return null;
    if (this.length === 0) return (this.tail = null);
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    return this.tail;
  }
  getByIndex() {}
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(4);
// myLinkedList.pop();
// myLinkedList.unshift(10);
// myLinkedList.shift();
// console.log(myLinkedList.getFirst());
console.log(myLinkedList.getLast());

// console.log(myLinkedList);
