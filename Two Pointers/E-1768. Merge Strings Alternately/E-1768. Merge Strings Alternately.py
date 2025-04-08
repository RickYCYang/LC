class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ""
        n, m = len(word1), len(word2)
        i, max_length = 0, max(n, m)

        while i < max_length:
            if i < n:
                result += word1[i]
            if i < m:
                result += word2[i]
            i += 1

        return result
