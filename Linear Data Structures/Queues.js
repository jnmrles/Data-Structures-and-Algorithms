// A Queue is a linear collection of nodes that exclusively adds nodes to the tail (enqueues), and removes (dequeues) nodes from the head of the queue
// EX. a grocery store line, people leave at the front of the line and people join the line at the back of the line

// Queues provide three methods for interaction:

// Enqueue - adds data to the “back” or end of the queue
// Dequeue - provides and removes data from the “front” or beginning of the queue
// Peek - reveals data from the “front” of the queue without removing it
// Queues are a First In, First Out or FIFO structure.
// Attempting to Enqueue to a full queue will result in a queue overflow
// Attempting to Dequeue a empty que will cause a queue underflow
// Can be implemented using a linked list or array
// Bounded queues have a limited size.
//
//

// Node Class
//
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

// Singly Linked List Class
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const nextNode = new Node(data);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new Node(data);
    } else {
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        temp = temp.getNextNode();
      }
      temp.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    output = output.concat("<tail>");
    console.log(output);
  }
}

//
// Queue Class
//

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error("Queue is full");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      );
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}
