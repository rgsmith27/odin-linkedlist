import Node from "./node-class.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node();
    node.value = value;
    if (this.head) {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = node;
    } else {
      this.head = node;
    }
  }

  prepend(value) {
    const node = new Node();
    node.value = value;
    node.next = this.head;
    this.head = node;
  }

  size() {
    let count = 0;
    let pointer = this.head;
    while (pointer) {
      pointer = pointer.next;
      count++;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  at(index) {
    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer;
  }

  pop() {
    let pointer = this.head;
    while (pointer.next.next) {
      pointer = pointer.next;
    }
    pointer.next = null;
  }

  contains(value) {
    let pointer = this.head;
    while (pointer) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  find(value) {
    let pointer = this.head;
    let index = 0;
    while (pointer) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  toString() {
    let returnString = "";
    let pointer = this.head;
    while (pointer) {
      returnString += `( ${pointer.value} ) -> `;
      pointer = pointer.next;
    }
    returnString += "null";
    return returnString;
  }
}

export default LinkedList;
