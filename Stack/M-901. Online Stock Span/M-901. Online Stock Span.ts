type Stock = {
  price: number;
  span: number;
};

class StockSpanner {
  stack: Stock[];
  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let span = 1;
    while (
      this.stack.length &&
      this.stack[this.stack.length - 1].price <= price
    ) {
      const prevStock = this.stack.pop();
      if (prevStock) {
        span += prevStock.span;
      }
    }
    this.stack.push({ price, span });
    return span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80)); // return 1
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(70)); // return 2
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(75)); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85)); // return 6
