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
}

const LS = new LinkedList();

LS.add("chriff");
LS.add("alae");
LS.add("hmida");
LS.add("ziko");

console.log(LS.size() === 4);
