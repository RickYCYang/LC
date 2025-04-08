class Solution:
    def maxProduct(self, words: List[str]) -> int:
        n = len(words)
        result = 0
        unicode_of_a = ord("a")
        masks = [None] * n

        for i in range(n):
            mask = 0
            for j in range(len(words[i])):
                unicode = ord(words[i][j]) - unicode_of_a
                mask |= 1 << unicode
            masks[i] = mask

        for i in range(n - 1):
            for j in range(n):
                if masks[i] & masks[j] == 0:
                    result = max(result, len(words[i]) * len(words[j]))

        return result
