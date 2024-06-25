class ProductTrieNode:
    def __init__(self) -> None:
        self.children = {}
        self.products: list[str] = []


class ProductTrie:
    def __init__(self, products: list[str]) -> None:
        self.root = ProductTrieNode()
        products.sort()
        self.init_product_trie(products)

    def init_product_trie(self, products: list[str]) -> None:
        for product in products:
            node = self.root
            for char in product:
                if char not in node.children:
                    node.children[char] = ProductTrieNode()
                node: ProductTrieNode = node.children[char]
                if len(node.products) < 3:
                    node.products.append(product)

    def get_products_by_word(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return []
            node = node.children[char]
        return node.products


class Solution:
    @classmethod
    def suggestedProducts(
        self, products: list[str], searchWord: str
    ) -> list[list[str]]:
        product_trie = ProductTrie(products)
        result: list[list[str]] = []
        typed_text = ""
        for char in searchWord:
            typed_text += char
            result.append(product_trie.get_products_by_word(typed_text))
        return result


testData = [
    {
        "products": ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
        "searchWord": "mouse",
        "ans": [
            ["mobile", "moneypot", "monitor"],
            ["mobile", "moneypot", "monitor"],
            ["mouse", "mousepad"],
            ["mouse", "mousepad"],
            ["mouse", "mousepad"],
        ],
    },
    {
        "products": ["havana"],
        "searchWord": "havana",
        "ans": [
            ["havana"],
            ["havana"],
            ["havana"],
            ["havana"],
            ["havana"],
            ["havana"],
        ],
    },
]

for data in testData:
    print(
        data["ans"] == Solution.suggestedProducts(data["products"], data["searchWord"])
    )
