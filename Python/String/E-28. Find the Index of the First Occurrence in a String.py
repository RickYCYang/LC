class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) > len(haystack):
            return -1

        n, m = len(haystack), len(needle)

        # sadbutsad, sad => n = 8, m = 3
        for i in range(n):
            if i + m > n:
                return -1
            is_substr = True
            for j in range(m):
                if haystack[i + j] != needle[j]:
                    is_substr = False

            if is_substr:
                return i

        return -1
