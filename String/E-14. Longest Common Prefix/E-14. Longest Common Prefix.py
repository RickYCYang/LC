class Solution:
    @classmethod
    def longestCommonPrefix(self, strs):
        prefix = strs[0]

        for i in range(len(prefix)):
            for s in strs:
                if i > len(s) - 1 or prefix[i] != s[i]:
                    prefix = prefix[:i]
                if len(prefix) - 1 < i:
                    return prefix
        return prefix


test_data = [
    {
        "strs": ['flower', 'flow', 'flight'],
        "ans": 'fl',
    },
    {
        "strs": ['dog', 'racecar', 'car'],
        "ans": '',
    },
    {"strs": ["ab", "a"], "ans": "a"}
]

for data in test_data:
    print(data["ans"] == Solution.longestCommonPrefix(data["strs"]))
