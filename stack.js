class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LIFO
class Stack {
  constructor(size) {
    this.currentSize = 0;
    this.size = size;
    this.head = null;
  }
  isEmpty() {
    return this.currentSize === 0;
  }
  isFull() {
    return this.currentSize === this.size;
  }
  push(value) {
    if (this.isEmpty()) {
      const node = new Node(value);
      this.head = node;
      this.currentSize++;
    } else {
      if (this.currentSize < this.size) {
        const node = new Node(value);
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
        this.currentSize++;
      } else {
        console.log("Size exceeded");
      }
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No element to display");
    } else {
      let curr = this.head;
      while (curr?.next?.next) {
        curr = curr.next;
      }
      curr.next = null;
      this.currentSize--;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("No element to display");
    } else {
      return this.head.value;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("No element to display");
    } else {
      let listValues = "";
      let curr = this.head;
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const ss = new Stack(5);
ss.push(5);
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);

ss.print();
console.log(ss.peek());
console.log(ss.isFull());
