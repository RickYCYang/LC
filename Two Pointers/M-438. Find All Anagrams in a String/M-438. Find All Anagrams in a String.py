class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        needed_chars = {}
        required_length = len(p)
        result = []

        for c in p:
            needed_chars[c] = (needed_chars.get(c) or 0) + 1

        l, r = 0, 0
        while r < len(s):
            if s[r] in needed_chars:
                if needed_chars[s[r]] > 0:
                    required_length -= 1
                needed_chars[s[r]] -= 1

            if r - l == len(p) - 1:
                if required_length == 0:
                    result.append(l)

                if s[l] in needed_chars:
                    if needed_chars[s[l]] >= 0:
                        required_length += 1
                    needed_chars[s[l]] += 1
                l += 1

            r += 1

        return result
