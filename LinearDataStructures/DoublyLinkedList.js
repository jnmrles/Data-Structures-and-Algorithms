// Doubly Linked List
// Are comprised of nodes that contain links to the next and previous nodes
// Are bidirectional, meaning it can be traversed in both directions
// Have a pointer to a single head node, which serves as the first node in the list
// Have a pointer to a single tail node, which serves as the last node in the list
// Require the pointers at the head of the list to be updated after addition to or removal of the head
// Require the pointers at the tail of the list to be updated after addition to or removed of the tail
// Require the pointers of the surrounding nodes to be updated after removal from the middle of the list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class");
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error("Previous node must be a member of the Node class");
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

// Doubly Linked List Class

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    // create new head
    const newHead = new Node(data);
    const currentHead = this.head;
    // check to see if theres a head. change the nxt value of the newhead to the current head, same with current head previous value
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    // set list's head to new head
    this.head = newHead;

    // if theres no tail, means list was empty so you must make the new head also the tail
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.head;
    // if theres no head, nothing to remove so just end function here
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  // removes specific node if found anywhere in the list
  removeByData(data) {
    // need to iterate through the list to see if the node Exists
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        // if we find a node w/ the given data, set our nodeToRemove and break the while loop
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    // if node doesnt exist, return null
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      // the nodeToDelete's next and previous values must be changed and assigned to eachother
      // Sets deleted Nodes next node's previous value to deleted node's previous node and vice versa
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

const subway = new DoublyLinkedList();

subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.printList();

subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData("TimesSquare");
subway.printList();
