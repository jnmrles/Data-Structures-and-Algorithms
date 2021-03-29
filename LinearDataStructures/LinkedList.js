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

//Swapping Elements in a Linked List

function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);

  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  if (data1 === data2) {
    console.log("Elements are the same - no swap to be made");
    return;
  }

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

// Time and Space Complexity
// The worst case for time complexity in swapNodes() is if both while loops must iterate all the way through to the end (either if there are no matching nodes, or if the matching node is the tail). This means that it has a linear big O runtime of O(n), since each while loop has a O(n) runtime, and constants are dropped.

// Finds the middle of a list by using Two pointers interate at different postions in the list
const findMiddle = (linkedList) => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};

// There are four new variables created in the function regardless of the input, which means that it has a constant space complexity of O(1).

// As with the nth-to-last solution, this solution has O(n) time complexity, and O(1) space complexity, since only two nodes are created no matter the size of the input list.
