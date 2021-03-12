// Linked Lists are sequential chain of nodess
//  They are a linear data structure used to store data
// Has Data and a Link to the Next node

// Creating a Node Class
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

  getNextNode() {
    return this.next;
  }
}

//
//Creating a Linked List class
//

class LinkedList {
  constructor() {
    // Linked List only keeps track of the head of the list
    this.head = null;
  }

  addToHead(data) {
    //  create a instance of Node to create a new Node
    const newHead = new Node(data);
    // store in our current head
    const currentHead = this.head;
    // sets our new head as our current head
    this.head = newHead;
    //If we are adding a node to the head, we must add our current head as the next value in our list
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    //  If tail has no value, then that means the list was empty, and we will be creating the head and tail with the data passed in.
    if (!tail) {
      this.head = new Node(data);
    } else {
      // how to iterate through a linked list
      while (tail.getNextNode()) {
        tail = tail.getNextNode();
      }
      // at this point we are at the end of the linked this
      tail.setNextNode(new Node(data));
    }
  }
  // to remove head, you must set the head as the the heads next node
  removeHead() {
    const removedHead = this.head;

    if (!removedHead) {
      return;
    } else {
      this.head = removedHead.getNextNode();
      return removedHead.data;
    }
  }

  //method to print out the linked list
  printList() {
    let currentNode = this.head;
    let output = "<head> ";

    //iterate through the list
    while (currentNode !== null) {
      //concate node data to output list
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }

    output = output + "<tail>";
    console.log(output);
  }
}

//
// How to use LinkedList class instance
//

const seasons = new LinkedList();
seasons.printList();
seasons.addToHead("summer");
seasons.addToHead("spring");

seasons.addToTail("fall");
seasons.addToTail("winter");
seasons.printList();

seasons.removeHead();
seasons.printList();
