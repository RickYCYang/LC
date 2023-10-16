class MinStack {
  valStack: number[];
  minValStack: number[];
  constructor() {
    this.valStack = [];
    this.minValStack = [];
  }

  push(val: number): void {
    /** valStack */
    this.valStack.push(val);

    /** minValStack */
    const n = this.minValStack.length;
    if (n === 0 || val < this.minValStack[n - 1]) {
      this.minValStack.push(val);
    } else {
      this.minValStack.push(this.minValStack[n - 1]);
    }
  }

  pop(): void {
    this.valStack.pop();
    this.minValStack.pop();
  }

  top(): number {
    const n = this.valStack.length;
    return this.valStack[n - 1];
  }

  getMin(): number {
    const n = this.minValStack.length;
    return this.minValStack[n - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
