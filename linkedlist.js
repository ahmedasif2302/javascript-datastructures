class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    console.log(this.size);
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size = this.size + 1;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (this.isEmpty() || index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFromListByValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    if (curr.value === value) {
      this.head = curr.next;
    } else {
      let prev = this.head;
      while (prev.next && prev?.next?.value === value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode?.next;
      }
    }

    this.size--;
  }

  removedFromIndex(index) {
    if (index < 0 || index >= this.size || this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      let prev = this.head;
      this.head = prev.next;
      console.log("Element removed at index 0", prev.value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      /* 
        1. index -1 will have previous element which has to removed  
        2. removedNode will be pointing to prev.next the item which has to be removed
        3. Pointing prev node to removed node next pointer
     */
      let removeNode = prev.next;
      prev.next = removeNode.next;
      console.log(`Element removed at index ${index} ${removeNode.value}`);
    }

    this.size--;
  }

  append(value) {
    if (this.isEmpty()) {
      const node = new Node(value);
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(value);
    }
    this.size++;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head;
      let c = 0;
      while (curr.next) {
        if (curr.value === value) {
          return c;
        }
        curr = curr.next;
        c++;
      }
      return -1;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.next == null) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.next == null) {
      this.head = null;
    } else {
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      curr.next = null;
    }
    this.size--;
  }
}

let ll = new LinkedList();

ll.prepend(10);
ll.prepend(20);
ll.prepend(30);

ll.prepend(40);

ll.prepend(50);

ll.print();

ll.removeFromEnd();
ll.removeFromEnd();
ll.removeFromEnd();

ll.print();

// ll.reverse();

// ll.print();

// ll.getSize();
