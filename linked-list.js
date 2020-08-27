class LinkedList {
  constructor(list) {
    this.head = list || null;
    this.tail = list || null;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
    if (this.tail === null)
      this.tail = this.head;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let newNode = new Node(item, null);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  find(item) {
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while (currNode && currNode.value !== item) {
      currNode = currNode.next;
    }
    if (currNode.value === null) {
      console.log(`${item} is not in list`);
      return null;
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode && currNode.value !== item) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`${item} not found, cannot remove.`);
      return;
    }
    if (this.tail === currNode)
      this.tail = previousNode;

    previousNode.next = currNode.next;
  }

  insertBefore(newValue, givenValue) {
    // If the list is empty
    if (this.head === null) {
      return null;
    }

    if (this.head.value === givenValue) {
      let newNode = new Node(newValue, this.head);
      this.head = newNode;
      return;
    }

    // Start at the head
    let currNode = this.head;

    while ((currNode.next !== null) && (currNode.next.value !== givenValue)) {
      currNode = currNode.next;
    }
    if (currNode.next === null) {
      console.log(`${givenValue} not found, cannot insert ${newValue}.`);
      return null;
    }
    let newNode = new Node(newValue, currNode.next);
    currNode.next = newNode;
  }

  insertAfter(newValue, givenValue) {
    if (this.head === null)  // If the list is empty
      return null;

    let currNode = this.head; // Start at the head

    while (currNode !== null && currNode.value !== givenValue) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`${givenValue} not found, cannot insert ${newValue}.`);
      return;
    }
    let newNode = new Node(newValue, currNode.next);
    if (this.tail === currNode)
      this.tail = newNode;

    currNode.next = newNode;
  }

  insertAt(newValue, index) {
    if (this.head === null)
      return null;

    let currentIndex = 0;
    let currNode = this.head;
    let prevNode = this.head;

    if (index === 0) {
      this.insertFirst(newValue);
      return;
    }

    while (currNode !== null && currentIndex < index) {
      currentIndex++;
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`index:${index} not found, cannot insert ${newValue}.`);
      return;
    }
    let newNode = new Node(newValue, currNode);
    prevNode.next = newNode;
  }

  printList() {
    let currNode = this.head;

    while (currNode !== null) {
      console.log(`${currNode.value}`);
      currNode = currNode.next;
    }

    console.log('head:', this.head);
    console.log('tail:', this.tail);
  }
}


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export {
  LinkedList,
  Node
};