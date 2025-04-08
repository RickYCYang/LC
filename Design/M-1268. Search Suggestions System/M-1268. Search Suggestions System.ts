class ProductTrieNode {
  children: object;
  products: string[];
  constructor() {
    this.children = {};
    this.products = [];
  }
}

class ProductTrie {
  root: ProductTrieNode;

  constructor(products: string[]) {
    this.root = new ProductTrieNode();
    this.initProductTrie(products.sort());
  }
  initProductTrie(products: string[]): void {
    for (const product of products) {
      let node = this.root;
      for (const char of product) {
        if (!(char in node.children)) {
          node.children[char] = new ProductTrieNode();
        }
        node = node.children[char];
        if (node.products.length < 3) node.products.push(product);
      }
    }
  }
  getProductsBySearchWord(searchWord: string): string[] {
    let node = this.root;
    for (const char of searchWord) {
      if (!(char in node.children)) return [];
      node = node.children[char];
    }
    return node.products;
  }
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
  const productTrie = new ProductTrie(products);
  const result: string[][] = [];
  let typedText = '';
  for (const char of searchWord) {
    typedText += char;
    result.push(productTrie.getProductsBySearchWord(typedText));
  }

  return result;
}

const testData = [
  {
    products: ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
    searchWord: 'mouse',
    ans: [
      ['mobile', 'moneypot', 'monitor'],
      ['mobile', 'moneypot', 'monitor'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
    ],
  },
  {
    products: ['havana'],
    searchWord: 'havana',
    ans: [
      ['havana'],
      ['havana'],
      ['havana'],
      ['havana'],
      ['havana'],
      ['havana'],
    ],
  },
];

for (const data of testData) {
  console.log(
    JSON.stringify(data.ans) ===
      JSON.stringify(suggestedProducts(data.products, data.searchWord))
  );
}
