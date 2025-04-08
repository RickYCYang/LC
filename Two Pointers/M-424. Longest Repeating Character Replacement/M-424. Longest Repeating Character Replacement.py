class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        char_freq = {}
        longest, cur_longest = 0, 0
        l, r = 0, 0

        while r < len(s):
            char_freq[s[r]] = (char_freq.get(s[r]) or 0) + 1
            cur_longest = max(cur_longest, char_freq[s[r]])

            while r - l + 1 - cur_longest > k:
                char_freq[s[l]] -= 1
                l += 1

            longest = max(longest, r - l + 1)
            r += 1

        return longest
