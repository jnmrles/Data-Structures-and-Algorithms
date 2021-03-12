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
