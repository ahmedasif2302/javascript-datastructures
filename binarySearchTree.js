class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(newNode, rootNode) {
    if (newNode.value > rootNode.value) {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(newNode, rootNode.right);
      }
    } else if (newNode.value < rootNode.value) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(newNode, rootNode.left);
      }
    }
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(node, this.root);
    }
  }

  searchNode(root, value) {
    if (!root) {
      return false;
    } else if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.searchNode(root.left, value);
    } else if (root.value < value) {
      return this.searchNode(root.right, value);
    } else {
      return false;
    }
  }
}

const bst = new BST();

bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(11);
bst.insert(12);
bst.insert(13);

console.log(bst.searchNode(bst.root, 14));
