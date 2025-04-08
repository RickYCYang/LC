class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_char = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end_char = True

    def search(self, word: str) -> bool:
        return self.dfs(word, self.root)

    def dfs(self, word: str, node: TrieNode):
        if not node:
            return False

        if not word:
            return node.is_end_char

        first_char = word[0]
        if first_char == ".":
            found = False
            for child_node in node.children.values():
                found = found or self.dfs(word[1:], child_node)
            return found

        if first_char not in node.children:
            return False

        return self.dfs(word[1:], node.children[first_char])


# Your WordDictionary object will be instantiated and called as such:
obj = WordDictionary()
obj.addWord("bad")
param_2 = obj.search(".ad")
