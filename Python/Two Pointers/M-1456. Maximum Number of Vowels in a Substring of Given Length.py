class Solution:
    @classmethod
    def maxVowels(self, s: str, k: int) -> int:
        vowels_cnt, max_vowels_cnt = 0, 0
        vowels = {"a", "e", "i", "o", "u"}
        l, r = 0, 0

        while r < len(s):
            if s[r] in vowels:
                vowels_cnt += 1
                max_vowels_cnt = max(max_vowels_cnt, vowels_cnt)

            # reach the window size
            if r - l == k - 1:
                if s[l] in vowels:
                    vowels_cnt -= 1
                l += 1

            r += 1

        return max_vowels_cnt


testData = [
    {
        "s": "abciiidef",
        "k": 3,
        "ans": 3,
    },
    {
        "s": "aeiou",
        "k": 2,
        "ans": 2,
    },
    {
        "s": "leetcode",
        "k": 3,
        "ans": 2,
    },
]

for data in testData:
    print(data["ans"] == Solution.maxVowels(data["s"], data["k"]))
