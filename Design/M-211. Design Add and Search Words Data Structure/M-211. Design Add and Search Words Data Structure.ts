class TrieNode {
  children: object;
  isEndChar: boolean;
  constructor() {
    this.children = {};
    this.isEndChar = false;
  }
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.isEndChar = true;
  }

  search(word: string): boolean {
    return this.dfs(word, this.root);
  }

  dfs = (word: string, node: TrieNode): boolean => {
    if (!node) return false;
    if (!word) return node.isEndChar;

    const firstChar = word[0];
    if (firstChar === '.') {
      let found = false;
      for (const childNode of Object.values(node.children)) {
        found = found || this.dfs(word.substring(1), childNode);
      }
      return found;
    }

    if (!node.children[firstChar]) return false;

    return this.dfs(word.substring(1), node.children[firstChar]);
  };
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad')); // return False
console.log(wordDictionary.search('bad')); // return True
console.log(wordDictionary.search('.ad')); // return True
console.log(wordDictionary.search('b..')); // return True
