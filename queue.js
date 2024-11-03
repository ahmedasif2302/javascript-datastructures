class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// FIFO
class Queue {
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
  enqueue(value) {
    if (this.isEmpty()) {
      const node = new Node(value);
      this.head = node;
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
    this.currentSize++;
  }

  dequeue() {
    if (this.isEmpty()) {
      const node = new Node(value);
      this.head = node;
    } else {
      this.head = this.head.next;
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

let qq = new Queue(10);

qq.enqueue(10);
qq.enqueue(20);
qq.enqueue(30);
qq.enqueue(40);
qq.enqueue(50);

console.log(qq.peek());

qq.dequeue();
qq.dequeue();
qq.dequeue();

qq.print();
