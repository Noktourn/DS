/**
 * Represents a BST Node.
 */
class Node {
  /**
   * Initialize a BST Node.
   * @constructor
   * @param  {any} data Node's data.
   * @param  {Node} left=null Node's left child.
   * @param  {Node} right=null Node's right child.
   */
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  #size;
  #root;
  /**
   * Initialize a BST.
   */
  constructor() {
    this.#root = null;
    this.#size = 0;
  }

  size() {
    return this.#size;
  }

  insert(data) {
    const NODE = new Node(data);
    if (this.#root === null) {
      this.#root = NODE;
      ++this.#size;
      return true;
    }

    this.insertNode(this.#root, NODE);
    ++this.#size;
    return true;
  }

  insertNode(node, element) {
    if (element.data <= node.data) {
      if (!node.left) {
        node.left = element;
        return;
      }
      this.insertNode(node.left, element);
    } else {
      if (!node.right) {
        node.right = element;
        return;
      }
      this.insertNode(node.right, element);
    }
  }

  search(value) {
    if (this.#root === null) return null;

    return this.searchNode(this.#root, value);
  }

  searchNode(node, value) {
    if (!node) return null;
    if (node.data === value) return node;

    if (value < node.data) {
      return this.searchNode(node.left, value);
    }

    return this.searchNode(node.right, value);
  }

  traverse(mode) {
    switch (mode) {
      case "INORDER":
        this.inOrder(this.#root);
        break;
      case "PREORDER":
        this.preOrder(this.#root);
        break;
      case "POSTORDER":
        this.postOrder(this.#root);
        break;
      default:
        break;
    }
  }

  inOrder(node) {
    if (!node) return;

    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }

  preOrder(node) {
    if (!node) return;

    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node) {
    if (!node) return;

    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
}

// const BSTI = new BST();
// BSTI.insert(13);
// BSTI.insert(11);
// BSTI.insert(14);
// BSTI.insert(2);
// BSTI.insert(5);
// BSTI.insert(1);
// BSTI.insert(50);
// BSTI.insert(3);
// BSTI.insert(6);
// console.log("size", BSTI.size());
// BSTI.traverse("INORDER");
// console.log("find eleme", BSTI.search(50));
