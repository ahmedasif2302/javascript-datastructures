class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues = listValues + " " + curr.value;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  prepend(value) {
    if (this.isEmpty()) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    if (this.isEmpty()) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(value);
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      node.prev = curr;
    }

    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("No elements found");
      return;
    }
    let next = this.head.next;
    this.head = next;
    this.size--;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("No elements found");
      return;
    }
    let curr = this.head;
    if (curr?.next == null) {
      this.head = null;
    } else {
      while (curr?.next?.next) {
        curr = curr.next;
      }
      curr.next = null;
    }
  }

  removeByIndex(index) {
    if (index === 0) {
      this.head = null;
      this.size--;
      return;
    }

    if (index < 0 || index > this.size - 1 || this.isEmpty()) {
      console.log("index out of bound");
      return null;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    let removedNode = curr;
    if (removedNode.next == null) {
      removedNode.prev.next = null;
      this.size--;
      return;
    }
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    this.size--;
  }

  removeByValue(value) {
    let curr = this.head;
    if (curr.prev == null && curr.next == null) {
      this.head = null;
      this.size--;
      return;
    }

    while (curr && curr.value !== value) {
      curr = curr.next;
    }
    let removedNode = curr;
    if (removedNode.next !== null) {
      if (removedNode.prev === null) {
        this.head = removedNode.next;
        this.size--;
        return;
      }
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      this.size--;
      return;
    } else {
      removedNode.prev.next = null;
      this.size--;
      return;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("No elements found");
    }
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (curr.value == value) {
        return count;
      }
      curr = curr.next;
      count++;
    }
    return -1;
  }
}

const dd = new DoublyLinkedList();
dd.append(10);
dd.append(20);
dd.append(30);
dd.append(40);
dd.append(50);

dd.print();

console.log(dd.search(40));
console.log(dd.search(40));
