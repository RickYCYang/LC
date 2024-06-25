class TrieNode {
  children: object;
  isEndChar: boolean;
  constructor() {
    this.children = {};
    this.isEndChar = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!(char in node.children)) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndChar = true;
  }

  isMatched(word: string, fullyMatched = true): boolean {
    let node = this.root;
    for (const char of word) {
      if (!(char in node.children)) return false;
      node = node.children[char];
    }
    return fullyMatched ? node.isEndChar : true;
  }

  search(word: string): boolean {
    return this.isMatched(word);
  }

  startsWith(prefix: string): boolean {
    return this.isMatched(prefix, false);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
