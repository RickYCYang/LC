/** solution 2: linked list */
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class TwoDirsLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(key, value) {
    const newNode = new Node(key, value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    /** one node only */
    if (this.head === node && this.tail === node) {
      this.head = null;
      this.tail = null;
    } else if (this.head === node) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.tail === node) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const prevNode = node.prev;
      const nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length--;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.linkedList = new TwoDirsLinkedList();
    this.nodeCache = {};
  }

  get(key) {
    if (!(key in this.nodeCache)) return -1;

    const value = this.nodeCache[key].value;
    this.linkedList.remove(this.nodeCache[key]);
    this.nodeCache[key] = this.linkedList.add(key, value);
    return value;
  }

  put(key, value) {
    if (key in this.nodeCache) {
      const node = this.nodeCache[key];
      this.linkedList.remove(node);
    }
    this.nodeCache[key] = this.linkedList.add(key, value);
    if (this.linkedList.length > this.capacity) {
      const origHeadNode = this.linkedList.head;
      this.linkedList.remove(origHeadNode);
      delete this.nodeCache[origHeadNode.key];
    }
  }
}
