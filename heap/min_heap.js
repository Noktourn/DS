class Min_Heap {
  #size;
  #root;
  /**
   * Initialize a Min Heap.
   * @constructor
   * @param {Number} capacity An integer value representing the heap capacity.
   */
  constructor(capacity = 16) {
    this.#root = new Array(capacity).fill(null);
    this.#size = 0;
  }
  /**
   * Returns the size of the heap
   */
  size() {
    return this.#size;
  }
  /**Adds a value to the heap.
   * @param  {any} value value to be added to the heap.
   */
  insert(value) {
    this.#root[this.#size] = value;
    ++this.#size;
    this.swim();
  }
  /**
   * Gets the min value of the heap.
   */
  peek() {
    return this.#root[0];
  }
  /**
   * Gets the min value of the heap and remove it.
   */
  poll() {
    if (this.#size === 0) return null;
    const NODE = this.#root[0];
    this.#root[0] = this.#root[this.#size - 1];
    this.#root[this.#size - 1] = null;
    --this.#size;
    this.sink();
    return NODE;
  }

  /**
   * Puts the inserted element in its correct position.
   */
  swim() {
    let index = this.#size - 1;
    while (this.hasParent(index) && this.parent(index) > this.#root[index]) {
      const PARENT_INDEX = this.parentIndex(index);
      this.swap(this.#root, index, PARENT_INDEX);
      index = PARENT_INDEX;
    }
  }

  /**
   * Puts last element in the correct position after a poll.
   */
  sink() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.rightChildIndex(index);
      }

      if (this.#root[index] < this.#root[smallerChildIndex]) {
        break;
      } else {
        this.swap(this.#root, smallerChildIndex, index);
      }

      index = smallerChildIndex;
    }
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  rightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  hasParent(index) {
    return this.parentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.#size;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.#size;
  }

  parent(index) {
    return this.#root[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.#root[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.#root[this.rightChildIndex(index)];
  }

  swap(list, index1, index2) {
    const TEMP = list[index1];
    list[index1] = list[index2];
    list[index2] = TEMP;
  }

  toString() {
    console.log(this.#root);
  }
}

// const MIN_HEAP = new Min_Heap();
// MIN_HEAP.insert(4);
// MIN_HEAP.insert(1);
// MIN_HEAP.insert(3);
// MIN_HEAP.insert(3);
// MIN_HEAP.insert(5);
// MIN_HEAP.insert(2);
// MIN_HEAP.insert(0);

// console.log(MIN_HEAP.size());
// MIN_HEAP.toString();
// console.log("###############################");
// console.log(MIN_HEAP.poll());
// console.log(MIN_HEAP.poll());
// console.log(MIN_HEAP.poll());
// console.log(MIN_HEAP.poll());
// console.log(MIN_HEAP.poll());
// console.log(MIN_HEAP.poll());
// console.log(MIN_HEAP.poll());
// MIN_HEAP.toString();
// console.log(MIN_HEAP.size());

// console.log(parentIndex(0));
