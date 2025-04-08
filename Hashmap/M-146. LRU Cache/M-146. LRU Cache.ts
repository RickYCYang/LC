/** solution 1: ES6 Map */
class LRUCache {
  capacity: number;
  cache: Map<number, number>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key) as number;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) this.cache.delete(key);

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const [firstItem] = this.cache.keys();
      this.cache.delete(firstItem);
    }
  }
}
