class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;

  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  const idx = this.map.get(val);
  //idx = 1
  //[0, 0] = [0, 0]
  [this.arr[idx], this.arr[this.arr.length - 1]] = [
    this.arr[this.arr.length - 1],
    this.arr[idx],
  ];
  this.arr.pop();
  if (this.arr[idx]) {
    this.map.set(this.arr[idx], idx);
  }
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet();
console.log(obj.insert(3)); // true
console.log(obj.insert(3)); // false
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.insert(1)); // true
console.log(obj.remove(3)); // true
console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.insert(0)); // true
console.log(obj.remove(0)); // true
