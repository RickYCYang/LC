class Solution:
    @classmethod
    def lengthOfLongestSubstring(self, s: str):
        map = {}
        ans = 0
        l = 0
        for r in range(len(s)):
            map[s[r]] = (map.get(s[r]) or 0) + 1
            while map[s[r]] > 1:
                map[s[l]] = map[s[l]] - 1
                l += 1
            ans = max(ans, r - l + 1)

        return ans


test_data = [
    {
        "s": 'abcabcbb',
        "ans": 3,
    },
    {
        "s": 'bbbbb',
        "ans": 1,
    },
    {
        "s": 'pwwkew',
        "ans": 3,
    },
]

for data in test_data:
    print(data["ans"] == Solution.lengthOfLongestSubstring(data["s"]))
