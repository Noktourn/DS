/**
 * Class used as an entry in singly linked list.
 */
class Node {
  /**
   * @constructor
   * @param  {any} value data of the node
   * @param  {Node} next=null reference to the next node
   */
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

/**
 * Class representing a chained list of values.
 */
class LinkedList {
  #size;
  #head;
  /**
   * Initialize LinkedList size and head pointer.
   * @constructor
   */
  constructor() {
    this.#size = 0;
    this.#head = null;
  }

  /**
   * returns the size of the linked list.
   */
  size() {
    return this.#size;
  }

  /**
   * add a value to the linked list.
   * @param  {any} value a promitive or object value to be added.
   * @returns {boolean} returns true if value is added successfully or false otherwise.
   */
  add(value) {
    const NODE = new Node(value);
    if (this.size() === 0) {
      this.#head = NODE;
      ++this.#size;
      return true;
    }

    let current = this.#head;
    while (current.next) {
      current = current.next;
    }

    current.next = NODE;
    ++this.#size;
    return true;
  }

  /**Deletes first node.
   * @returns {boolean} true if node was deleted or false otherwise.
   */
  delete() {
    if (this.#size === 0) return false;
    this.#head = this.#head.next;
    --this.#size;
    return true;
  }

  /**Delete node at the provided index.
   * @param  {Number} index an integer between 0 inclusive and size exclusive.
   * @returns {boolean} true if node was deleted or false otherwise.
   */
  deleteAt(index) {
    if (index < 0 || index === this.#size || this.#size === 0) return false;
    if (index === 0) {
      this.delete();
    }

    let counter = index;
    let previous = null;
    let current = this.#head;
    while (counter > 0 && current.next) {
      previous = current;
      current = current.next;
      --counter;
    }

    previous.next = current.next;
    --this.#size;

    return true;
  }

  toString() {
    let current = this.#head;
    let st = current.data;
    while (current.next) {
      current = current.next;
      st += " -> ";
      st += current.data;
    }
    return st;
  }
}

// const LS = new LinkedList();

// LS.add("chriff"); //0
// LS.add("alae"); //1
// LS.add("zakaria"); //2
// LS.add("anas"); //3

// console.log(LS.size());
// console.log(LS.toString());
// LS.deleteAt(0);
// LS.deleteAt(2);
// console.log(LS.toString());
