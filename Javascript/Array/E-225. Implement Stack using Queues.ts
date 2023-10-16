class MyStack {
  firstQueue: number[];
  secondQueue: number[];

  constructor() {
    this.firstQueue = [];
    this.secondQueue = [];
  }

  moveItems = (sourceQueue: number[], targetQueue: number[]): void => {
    while (sourceQueue.length) {
      const item = sourceQueue.shift();
      if (item) targetQueue.push(item);
    }
  };

  push(x: number): void {
    this.moveItems(this.secondQueue, this.firstQueue);
    this.firstQueue.push(x);
  }

  pop(): number {
    while (this.firstQueue.length > 1) {
      const item = this.firstQueue.shift();
      if (item) this.secondQueue.push(item);
    }
    /** remaining item */
    const item = this.firstQueue.shift();
    this.moveItems(this.secondQueue, this.firstQueue);
    return item || 0;
  }

  top(): number {
    return this.firstQueue[this.firstQueue.length - 1];
  }

  empty(): boolean {
    return this.firstQueue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
