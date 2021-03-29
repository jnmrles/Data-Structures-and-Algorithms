// stacks are linear collection of nodes
// Last In, First out LIFO
// Pushes nodes into head of stack, pops from head of stack, peaks from head of stack
// Stacks provide three methods for interaction:
// Push - adds data to the “top” of the stack
// Pop - returns and removes data from the “top” of the stack
// Peek - returns data from the “top” of the stack without removing it

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("Next node must be a member of the Node class");
    }
    this.next = node;
  }

  setNext(data) {
    this.next = data;
  }

  getNextNode() {
    return this.next;
  }
}

// linkedList Class
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const nextNode = new Node(value);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(value) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(value));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;

    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }
}

// Stack Class

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error("Stack is empty");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}
