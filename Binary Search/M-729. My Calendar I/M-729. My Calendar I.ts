class MyCalendar {
  calendar: number[][];
  constructor() {
    this.calendar = [];
  }

  book(start: number, end: number): boolean {
    let [l, r] = [0, this.calendar.length - 1];
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const [eventStart, eventEnd] = this.calendar[mid];

      if (start < eventEnd && end > eventStart) return false;

      if (start >= eventEnd) l = mid + 1;
      else r = mid - 1;
    }
    this.calendar.splice(l, 0, [start, end]);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
var obj = new MyCalendar();
console.log(obj.book(10, 20)); //true
console.log(obj.book(15, 25)); //false
console.log(obj.book(20, 30)); //true
