class TrieNode:
    def __init__(self) -> None:
        self.children = {}
        self.is_end_char = False


class Trie:
    def __init__(self) -> None:
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_char = True

    def is_matched(self, word: str, fully_matched: bool = True) -> bool:
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_char if fully_matched else True

    def search(self, word: str) -> bool:
        return self.is_matched(word)

    def startsWith(self, prefix: str) -> bool:
        return self.is_matched(prefix, False)


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
