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

  preorder(root) {
    if (root) {
      console.log("preorder", root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log("inorder", root.value);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log("postorder", root.value);
    }
  }

  bfs() {
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr?.value);
      if (curr?.left) {
        queue.push(curr?.left);
      }
      if (curr?.right) {
        queue.push(curr?.right);
      }
    }
  }

  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.minValue(root.right);
    }
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
    }
    return root;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(8);

// bst.preorder(bst.root);
// bst.inorder(bst.root);
// bst.postorder(bst.root);

// bst.minValue(bst.root);

bst.delete(8);

// bst.bfs();
